// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLADD_METADATA: Metadata = {
    id: "52102f8f56de3e64499fd0d0ce57dc8209a5d660.boutiques",
    name: "fsladd",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FsladdParameters {
    "__STYXTYPE__": "fsladd";
    "output_file": string;
    "mean_flag": boolean;
    "scale_flag": boolean;
    "volume_list": Array<InputPathType>;
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
        "fsladd": fsladd_cargs,
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
        "fsladd": fsladd_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsladd(...)`.
 *
 * @interface
 */
interface FsladdOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Resulting output file
     */
    resulting_output: OutputPathType;
}


function fsladd_params(
    output_file: string,
    volume_list: Array<InputPathType>,
    mean_flag: boolean = false,
    scale_flag: boolean = false,
): FsladdParameters {
    /**
     * Build parameters.
    
     * @param output_file Output volume file
     * @param volume_list List of input volumes
     * @param mean_flag Calculate mean instead of sum
     * @param scale_flag Scale each input image mean to 1000 before processing
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsladd" as const,
        "output_file": output_file,
        "mean_flag": mean_flag,
        "scale_flag": scale_flag,
        "volume_list": volume_list,
    };
    return params;
}


function fsladd_cargs(
    params: FsladdParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsladd");
    cargs.push((params["output_file"] ?? null));
    if ((params["mean_flag"] ?? null)) {
        cargs.push("-m");
    }
    if ((params["scale_flag"] ?? null)) {
        cargs.push("-s");
    }
    cargs.push(...(params["volume_list"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function fsladd_outputs(
    params: FsladdParameters,
    execution: Execution,
): FsladdOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsladdOutputs = {
        root: execution.outputFile("."),
        resulting_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function fsladd_execute(
    params: FsladdParameters,
    execution: Execution,
): FsladdOutputs {
    /**
     * Tool for adding or averaging multiple input volumes.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsladdOutputs`).
     */
    params = execution.params(params)
    const cargs = fsladd_cargs(params, execution)
    const ret = fsladd_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsladd(
    output_file: string,
    volume_list: Array<InputPathType>,
    mean_flag: boolean = false,
    scale_flag: boolean = false,
    runner: Runner | null = null,
): FsladdOutputs {
    /**
     * Tool for adding or averaging multiple input volumes.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output_file Output volume file
     * @param volume_list List of input volumes
     * @param mean_flag Calculate mean instead of sum
     * @param scale_flag Scale each input image mean to 1000 before processing
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsladdOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLADD_METADATA);
    const params = fsladd_params(output_file, volume_list, mean_flag, scale_flag)
    return fsladd_execute(params, execution);
}


export {
      FSLADD_METADATA,
      FsladdOutputs,
      FsladdParameters,
      fsladd,
      fsladd_params,
};
