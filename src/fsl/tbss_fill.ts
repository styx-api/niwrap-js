// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TBSS_FILL_METADATA: Metadata = {
    id: "1bb4e0cf98177afda020809e69450928dc34d548.boutiques",
    name: "tbss_fill",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface TbssFillParameters {
    "__STYXTYPE__": "tbss_fill";
    "stats_image": InputPathType;
    "threshold": number;
    "mean_fa": InputPathType;
    "output": string;
    "include_negative_flag": boolean;
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
        "tbss_fill": tbss_fill_cargs,
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
        "tbss_fill": tbss_fill_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tbss_fill(...)`.
 *
 * @interface
 */
interface TbssFillOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Filled skeletonized FA image
     */
    filled_skeleton: OutputPathType;
}


function tbss_fill_params(
    stats_image: InputPathType,
    threshold: number,
    mean_fa: InputPathType,
    output: string,
    include_negative_flag: boolean = false,
): TbssFillParameters {
    /**
     * Build parameters.
    
     * @param stats_image Stats image
     * @param threshold Threshold value
     * @param mean_fa Mean FA image
     * @param output Output image
     * @param include_negative_flag Include negative stat values (below -threshold)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tbss_fill" as const,
        "stats_image": stats_image,
        "threshold": threshold,
        "mean_fa": mean_fa,
        "output": output,
        "include_negative_flag": include_negative_flag,
    };
    return params;
}


function tbss_fill_cargs(
    params: TbssFillParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tbss_fill");
    cargs.push(execution.inputFile((params["stats_image"] ?? null)));
    cargs.push(String((params["threshold"] ?? null)));
    cargs.push(execution.inputFile((params["mean_fa"] ?? null)));
    cargs.push((params["output"] ?? null));
    if ((params["include_negative_flag"] ?? null)) {
        cargs.push("-n");
    }
    return cargs;
}


function tbss_fill_outputs(
    params: TbssFillParameters,
    execution: Execution,
): TbssFillOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TbssFillOutputs = {
        root: execution.outputFile("."),
        filled_skeleton: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function tbss_fill_execute(
    params: TbssFillParameters,
    execution: Execution,
): TbssFillOutputs {
    /**
     * Tool for filling skeletonized FA images in TBSS.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TbssFillOutputs`).
     */
    params = execution.params(params)
    const cargs = tbss_fill_cargs(params, execution)
    const ret = tbss_fill_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tbss_fill(
    stats_image: InputPathType,
    threshold: number,
    mean_fa: InputPathType,
    output: string,
    include_negative_flag: boolean = false,
    runner: Runner | null = null,
): TbssFillOutputs {
    /**
     * Tool for filling skeletonized FA images in TBSS.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param stats_image Stats image
     * @param threshold Threshold value
     * @param mean_fa Mean FA image
     * @param output Output image
     * @param include_negative_flag Include negative stat values (below -threshold)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TbssFillOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TBSS_FILL_METADATA);
    const params = tbss_fill_params(stats_image, threshold, mean_fa, output, include_negative_flag)
    return tbss_fill_execute(params, execution);
}


export {
      TBSS_FILL_METADATA,
      TbssFillOutputs,
      TbssFillParameters,
      tbss_fill,
      tbss_fill_params,
};
