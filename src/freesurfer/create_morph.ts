// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CREATE_MORPH_METADATA: Metadata = {
    id: "d00775e741e3933385d72fe876f856c711446cb8.boutiques",
    name: "createMorph",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface CreateMorphParameters {
    "__STYXTYPE__": "createMorph";
    "input_transforms": Array<string>;
    "output_transform": string;
    "template"?: InputPathType | null | undefined;
    "subject"?: InputPathType | null | undefined;
    "debug_coordinates"?: Array<number> | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "createMorph": create_morph_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "createMorph": create_morph_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `create_morph(...)`.
 *
 * @interface
 */
interface CreateMorphOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting output transform file in tm3d format.
     */
    output_transform_file: OutputPathType;
}


function create_morph_params(
    input_transforms: Array<string>,
    output_transform: string,
    template: InputPathType | null = null,
    subject: InputPathType | null = null,
    debug_coordinates: Array<number> | null = null,
): CreateMorphParameters {
    /**
     * Build parameters.
    
     * @param input_transforms Input transforms, must specify type (affine, volume, morph, mesh, gcam) with filename.
     * @param output_transform Output transform file in tm3d format.
     * @param template Template volume for geometry. Required if a gcam is present.
     * @param subject Subject volume for geometry.
     * @param debug_coordinates Coordinates for debugging purposes. Requires three integer values.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "createMorph" as const,
        "input_transforms": input_transforms,
        "output_transform": output_transform,
    };
    if (template !== null) {
        params["template"] = template;
    }
    if (subject !== null) {
        params["subject"] = subject;
    }
    if (debug_coordinates !== null) {
        params["debug_coordinates"] = debug_coordinates;
    }
    return params;
}


function create_morph_cargs(
    params: CreateMorphParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("createMorph");
    cargs.push(
        "--in",
        ...(params["input_transforms"] ?? null)
    );
    cargs.push(
        "--out",
        (params["output_transform"] ?? null)
    );
    if ((params["template"] ?? null) !== null) {
        cargs.push(
            "--template",
            execution.inputFile((params["template"] ?? null))
        );
    }
    if ((params["subject"] ?? null) !== null) {
        cargs.push(
            "--subject",
            execution.inputFile((params["subject"] ?? null))
        );
    }
    if ((params["debug_coordinates"] ?? null) !== null) {
        cargs.push(
            "--dbg",
            ...(params["debug_coordinates"] ?? null).map(String)
        );
    }
    return cargs;
}


function create_morph_outputs(
    params: CreateMorphParameters,
    execution: Execution,
): CreateMorphOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CreateMorphOutputs = {
        root: execution.outputFile("."),
        output_transform_file: execution.outputFile([(params["output_transform"] ?? null)].join('')),
    };
    return ret;
}


function create_morph_execute(
    params: CreateMorphParameters,
    execution: Execution,
): CreateMorphOutputs {
    /**
     * Tool to create morphological transformations using specified input transforms.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CreateMorphOutputs`).
     */
    params = execution.params(params)
    const cargs = create_morph_cargs(params, execution)
    const ret = create_morph_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function create_morph(
    input_transforms: Array<string>,
    output_transform: string,
    template: InputPathType | null = null,
    subject: InputPathType | null = null,
    debug_coordinates: Array<number> | null = null,
    runner: Runner | null = null,
): CreateMorphOutputs {
    /**
     * Tool to create morphological transformations using specified input transforms.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_transforms Input transforms, must specify type (affine, volume, morph, mesh, gcam) with filename.
     * @param output_transform Output transform file in tm3d format.
     * @param template Template volume for geometry. Required if a gcam is present.
     * @param subject Subject volume for geometry.
     * @param debug_coordinates Coordinates for debugging purposes. Requires three integer values.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CreateMorphOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CREATE_MORPH_METADATA);
    const params = create_morph_params(input_transforms, output_transform, template, subject, debug_coordinates)
    return create_morph_execute(params, execution);
}


export {
      CREATE_MORPH_METADATA,
      CreateMorphOutputs,
      CreateMorphParameters,
      create_morph,
      create_morph_params,
};
