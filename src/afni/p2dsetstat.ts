// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const P2DSETSTAT_METADATA: Metadata = {
    id: "bf97782e51f33e92fa4f622b20ca100db34f1437.boutiques",
    name: "p2dsetstat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface P2dsetstatParameters {
    "__STYXTYPE__": "p2dsetstat";
    "dataset": string;
    "pvalue": number;
    "bisided": boolean;
    "twosided": boolean;
    "onesided": boolean;
    "quiet": boolean;
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
        "p2dsetstat": p2dsetstat_cargs,
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
        "p2dsetstat": p2dsetstat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `p2dsetstat(...)`.
 *
 * @interface
 */
interface P2dsetstatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The converted statistic value.
     */
    stat_value: OutputPathType;
}


function p2dsetstat_params(
    dataset: string,
    pvalue: number,
    bisided: boolean = false,
    twosided: boolean = false,
    onesided: boolean = false,
    quiet: boolean = false,
): P2dsetstatParameters {
    /**
     * Build parameters.
    
     * @param dataset Specify a dataset DDD and, if it has multiple sub-bricks, the [i]th subbrick with the statistic of interest MUST be selected explicitly; note the use of quotation marks around the brick selector (because of the square-brackets). 'i' can be either a number or a string label selector.
     * @param pvalue Input p-value P, which MUST be in the interval [0,1].
     * @param bisided Two-sided test.
     * @param twosided Two-sided test.
     * @param onesided One-sided test.
     * @param quiet Output only the final statistic value.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "p2dsetstat" as const,
        "dataset": dataset,
        "pvalue": pvalue,
        "bisided": bisided,
        "twosided": twosided,
        "onesided": onesided,
        "quiet": quiet,
    };
    return params;
}


function p2dsetstat_cargs(
    params: P2dsetstatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("p2dsetstat");
    cargs.push(
        "-inset",
        (params["dataset"] ?? null)
    );
    cargs.push(
        "-pval",
        String((params["pvalue"] ?? null))
    );
    if ((params["bisided"] ?? null)) {
        cargs.push("-bisided");
    }
    if ((params["twosided"] ?? null)) {
        cargs.push("-2sided");
    }
    if ((params["onesided"] ?? null)) {
        cargs.push("-1sided");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    return cargs;
}


function p2dsetstat_outputs(
    params: P2dsetstatParameters,
    execution: Execution,
): P2dsetstatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: P2dsetstatOutputs = {
        root: execution.outputFile("."),
        stat_value: execution.outputFile(["stdout"].join('')),
    };
    return ret;
}


function p2dsetstat_execute(
    params: P2dsetstatParameters,
    execution: Execution,
): P2dsetstatOutputs {
    /**
     * Convert a p-value to a statistic of choice with reference to a specific dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `P2dsetstatOutputs`).
     */
    params = execution.params(params)
    const cargs = p2dsetstat_cargs(params, execution)
    const ret = p2dsetstat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function p2dsetstat(
    dataset: string,
    pvalue: number,
    bisided: boolean = false,
    twosided: boolean = false,
    onesided: boolean = false,
    quiet: boolean = false,
    runner: Runner | null = null,
): P2dsetstatOutputs {
    /**
     * Convert a p-value to a statistic of choice with reference to a specific dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Specify a dataset DDD and, if it has multiple sub-bricks, the [i]th subbrick with the statistic of interest MUST be selected explicitly; note the use of quotation marks around the brick selector (because of the square-brackets). 'i' can be either a number or a string label selector.
     * @param pvalue Input p-value P, which MUST be in the interval [0,1].
     * @param bisided Two-sided test.
     * @param twosided Two-sided test.
     * @param onesided One-sided test.
     * @param quiet Output only the final statistic value.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `P2dsetstatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(P2DSETSTAT_METADATA);
    const params = p2dsetstat_params(dataset, pvalue, bisided, twosided, onesided, quiet)
    return p2dsetstat_execute(params, execution);
}


export {
      P2DSETSTAT_METADATA,
      P2dsetstatOutputs,
      P2dsetstatParameters,
      p2dsetstat,
      p2dsetstat_params,
};
