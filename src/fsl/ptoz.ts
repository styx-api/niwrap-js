// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PTOZ_METADATA: Metadata = {
    id: "2483398e2d2e7c9d9190d16195ce382a544fbc8f.boutiques",
    name: "ptoz",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PtozParameters {
    "__STYXTYPE__": "ptoz";
    "p_value": number;
    "tail_flag": boolean;
    "grf_flag"?: number | null | undefined;
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
        "ptoz": ptoz_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ptoz(...)`.
 *
 * @interface
 */
interface PtozOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function ptoz_params(
    p_value: number,
    tail_flag: boolean = false,
    grf_flag: number | null = null,
): PtozParameters {
    /**
     * Build parameters.
    
     * @param p_value p-value to convert
     * @param tail_flag Use 2-tailed conversion
     * @param grf_flag Use GRF maximum-height theory instead of Gaussian pdf
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ptoz" as const,
        "p_value": p_value,
        "tail_flag": tail_flag,
    };
    if (grf_flag !== null) {
        params["grf_flag"] = grf_flag;
    }
    return params;
}


function ptoz_cargs(
    params: PtozParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ptoz");
    cargs.push(String((params["p_value"] ?? null)));
    if ((params["tail_flag"] ?? null)) {
        cargs.push("-2");
    }
    if ((params["grf_flag"] ?? null) !== null) {
        cargs.push(
            "-g",
            String((params["grf_flag"] ?? null))
        );
    }
    return cargs;
}


function ptoz_outputs(
    params: PtozParameters,
    execution: Execution,
): PtozOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PtozOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function ptoz_execute(
    params: PtozParameters,
    execution: Execution,
): PtozOutputs {
    /**
     * Convert p-values to z-values.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PtozOutputs`).
     */
    params = execution.params(params)
    const cargs = ptoz_cargs(params, execution)
    const ret = ptoz_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ptoz(
    p_value: number,
    tail_flag: boolean = false,
    grf_flag: number | null = null,
    runner: Runner | null = null,
): PtozOutputs {
    /**
     * Convert p-values to z-values.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param p_value p-value to convert
     * @param tail_flag Use 2-tailed conversion
     * @param grf_flag Use GRF maximum-height theory instead of Gaussian pdf
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PtozOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PTOZ_METADATA);
    const params = ptoz_params(p_value, tail_flag, grf_flag)
    return ptoz_execute(params, execution);
}


export {
      PTOZ_METADATA,
      PtozOutputs,
      PtozParameters,
      ptoz,
      ptoz_params,
};
