// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_SYMMETRIC_METADATA: Metadata = {
    id: "1c653a3729e019c1a68b0edb9c44bee8ba0b0c6c.boutiques",
    name: "make_symmetric",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MakeSymmetricParameters {
    "__STYXTYPE__": "make_symmetric";
    "hemi": string;
    "input_file": InputPathType;
    "output_file": string;
    "transform_map": string;
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
        "make_symmetric": make_symmetric_cargs,
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
        "make_symmetric": make_symmetric_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `make_symmetric(...)`.
 *
 * @interface
 */
interface MakeSymmetricOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file after processing.
     */
    processed_output: OutputPathType;
    /**
     * Transformation map file mapping the input to the upright space.
     */
    map_output: OutputPathType;
}


function make_symmetric_params(
    hemi: string,
    input_file: InputPathType,
    output_file: string,
    transform_map: string,
): MakeSymmetricParameters {
    /**
     * Build parameters.
    
     * @param hemi The hemisphere to mirror; accepted values are 'lh' for left hemisphere or 'rh' for right hemisphere.
     * @param input_file Input image in .mgz format.
     * @param output_file Output image in .mgz format resulting from the symmetric processing.
     * @param transform_map Transformation map in .lta format mapping the input to the upright space.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_symmetric" as const,
        "hemi": hemi,
        "input_file": input_file,
        "output_file": output_file,
        "transform_map": transform_map,
    };
    return params;
}


function make_symmetric_cargs(
    params: MakeSymmetricParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_symmetric");
    cargs.push((params["hemi"] ?? null));
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    cargs.push((params["transform_map"] ?? null));
    return cargs;
}


function make_symmetric_outputs(
    params: MakeSymmetricParameters,
    execution: Execution,
): MakeSymmetricOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeSymmetricOutputs = {
        root: execution.outputFile("."),
        processed_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
        map_output: execution.outputFile([(params["transform_map"] ?? null)].join('')),
    };
    return ret;
}


function make_symmetric_execute(
    params: MakeSymmetricParameters,
    execution: Execution,
): MakeSymmetricOutputs {
    /**
     * Registers an input image to its left/right reversed version using mri_robust_register in a half-way space and mirrors the selected hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeSymmetricOutputs`).
     */
    params = execution.params(params)
    const cargs = make_symmetric_cargs(params, execution)
    const ret = make_symmetric_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_symmetric(
    hemi: string,
    input_file: InputPathType,
    output_file: string,
    transform_map: string,
    runner: Runner | null = null,
): MakeSymmetricOutputs {
    /**
     * Registers an input image to its left/right reversed version using mri_robust_register in a half-way space and mirrors the selected hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hemi The hemisphere to mirror; accepted values are 'lh' for left hemisphere or 'rh' for right hemisphere.
     * @param input_file Input image in .mgz format.
     * @param output_file Output image in .mgz format resulting from the symmetric processing.
     * @param transform_map Transformation map in .lta format mapping the input to the upright space.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeSymmetricOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_SYMMETRIC_METADATA);
    const params = make_symmetric_params(hemi, input_file, output_file, transform_map)
    return make_symmetric_execute(params, execution);
}


export {
      MAKE_SYMMETRIC_METADATA,
      MakeSymmetricOutputs,
      MakeSymmetricParameters,
      make_symmetric,
      make_symmetric_params,
};
