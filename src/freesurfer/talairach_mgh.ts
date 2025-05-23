// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TALAIRACH_MGH_METADATA: Metadata = {
    id: "6b9e2a03c841e63355d5121337160b9481a21d90.boutiques",
    name: "talairach_mgh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TalairachMghParameters {
    "__STYXTYPE__": "talairach_mgh";
    "input_volume": InputPathType;
    "output_volume": string;
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
        "talairach_mgh": talairach_mgh_cargs,
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
        "talairach_mgh": talairach_mgh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `talairach_mgh(...)`.
 *
 * @interface
 */
interface TalairachMghOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transformed output volume aligned with Talairach reference brain
     */
    transformed_output: OutputPathType;
}


function talairach_mgh_params(
    input_volume: InputPathType,
    output_volume: string,
): TalairachMghParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input volume file for the talairach transformation
     * @param output_volume Output volume file for the talairach transformation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "talairach_mgh" as const,
        "input_volume": input_volume,
        "output_volume": output_volume,
    };
    return params;
}


function talairach_mgh_cargs(
    params: TalairachMghParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("talairach_mgh");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function talairach_mgh_outputs(
    params: TalairachMghParameters,
    execution: Execution,
): TalairachMghOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TalairachMghOutputs = {
        root: execution.outputFile("."),
        transformed_output: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function talairach_mgh_execute(
    params: TalairachMghParameters,
    execution: Execution,
): TalairachMghOutputs {
    /**
     * A tool for aligning brain volume with Talairach reference brain.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TalairachMghOutputs`).
     */
    params = execution.params(params)
    const cargs = talairach_mgh_cargs(params, execution)
    const ret = talairach_mgh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function talairach_mgh(
    input_volume: InputPathType,
    output_volume: string,
    runner: Runner | null = null,
): TalairachMghOutputs {
    /**
     * A tool for aligning brain volume with Talairach reference brain.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input volume file for the talairach transformation
     * @param output_volume Output volume file for the talairach transformation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TalairachMghOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TALAIRACH_MGH_METADATA);
    const params = talairach_mgh_params(input_volume, output_volume)
    return talairach_mgh_execute(params, execution);
}


export {
      TALAIRACH_MGH_METADATA,
      TalairachMghOutputs,
      TalairachMghParameters,
      talairach_mgh,
      talairach_mgh_params,
};
