// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_DEFECTS_POINTSET_METADATA: Metadata = {
    id: "c8af85590fa0a0f9b7b5b8d2fa658f96e7b162ba.boutiques",
    name: "mris_defects_pointset",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisDefectsPointsetParameters {
    "__STYXTYPE__": "mris_defects_pointset";
    "surface": InputPathType;
    "defects": InputPathType;
    "out": string;
    "label"?: InputPathType | null | undefined;
    "control": boolean;
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
        "mris_defects_pointset": mris_defects_pointset_cargs,
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
        "mris_defects_pointset": mris_defects_pointset_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_defects_pointset(...)`.
 *
 * @interface
 */
interface MrisDefectsPointsetOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output pointset file containing locations of topological defects
     */
    pointset_output: OutputPathType;
}


function mris_defects_pointset_params(
    surface: InputPathType,
    defects: InputPathType,
    out: string,
    label: InputPathType | null = null,
    control: boolean = false,
): MrisDefectsPointsetParameters {
    /**
     * Build parameters.
    
     * @param surface Input surface
     * @param defects Input defect label (must match the surface dimensions)
     * @param out Output pointset file (json)
     * @param label Restrict pointset to this label (must be in input surface space)
     * @param control Save output in old control point format (v6 compatible)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_defects_pointset" as const,
        "surface": surface,
        "defects": defects,
        "out": out,
        "control": control,
    };
    if (label !== null) {
        params["label"] = label;
    }
    return params;
}


function mris_defects_pointset_cargs(
    params: MrisDefectsPointsetParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_defects_pointset");
    cargs.push(
        "--surf",
        execution.inputFile((params["surface"] ?? null))
    );
    cargs.push(
        "--defects",
        execution.inputFile((params["defects"] ?? null))
    );
    cargs.push(
        "--out",
        (params["out"] ?? null)
    );
    if ((params["label"] ?? null) !== null) {
        cargs.push(
            "--label",
            execution.inputFile((params["label"] ?? null))
        );
    }
    if ((params["control"] ?? null)) {
        cargs.push("--control");
    }
    return cargs;
}


function mris_defects_pointset_outputs(
    params: MrisDefectsPointsetParameters,
    execution: Execution,
): MrisDefectsPointsetOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisDefectsPointsetOutputs = {
        root: execution.outputFile("."),
        pointset_output: execution.outputFile([(params["out"] ?? null)].join('')),
    };
    return ret;
}


function mris_defects_pointset_execute(
    params: MrisDefectsPointsetParameters,
    execution: Execution,
): MrisDefectsPointsetOutputs {
    /**
     * Produces a pointset file containing the locations of each topological defect in a surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisDefectsPointsetOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_defects_pointset_cargs(params, execution)
    const ret = mris_defects_pointset_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_defects_pointset(
    surface: InputPathType,
    defects: InputPathType,
    out: string,
    label: InputPathType | null = null,
    control: boolean = false,
    runner: Runner | null = null,
): MrisDefectsPointsetOutputs {
    /**
     * Produces a pointset file containing the locations of each topological defect in a surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface Input surface
     * @param defects Input defect label (must match the surface dimensions)
     * @param out Output pointset file (json)
     * @param label Restrict pointset to this label (must be in input surface space)
     * @param control Save output in old control point format (v6 compatible)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisDefectsPointsetOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_DEFECTS_POINTSET_METADATA);
    const params = mris_defects_pointset_params(surface, defects, out, label, control)
    return mris_defects_pointset_execute(params, execution);
}


export {
      MRIS_DEFECTS_POINTSET_METADATA,
      MrisDefectsPointsetOutputs,
      MrisDefectsPointsetParameters,
      mris_defects_pointset,
      mris_defects_pointset_params,
};
