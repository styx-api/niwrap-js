// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLCC_METADATA: Metadata = {
    id: "39e2d4230b27cc7b8202577c5ebeea8323d5f9cd.boutiques",
    name: "fslcc",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslccParameters {
    "__STYXTYPE__": "fslcc";
    "first_input": InputPathType;
    "second_input": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "noabs_flag": boolean;
    "nodemean_flag": boolean;
    "threshold"?: number | null | undefined;
    "decimal_places"?: number | null | undefined;
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
        "fslcc": fslcc_cargs,
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
 * Output object returned when calling `fslcc(...)`.
 *
 * @interface
 */
interface FslccOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fslcc_params(
    first_input: InputPathType,
    second_input: InputPathType,
    mask: InputPathType | null = null,
    noabs_flag: boolean = false,
    nodemean_flag: boolean = false,
    threshold: number | null = 0.1,
    decimal_places: number | null = 2,
): FslccParameters {
    /**
     * Build parameters.
    
     * @param first_input First input time-series
     * @param second_input Second input time-series
     * @param mask Mask file name
     * @param noabs_flag Don't return absolute values (keep sign)
     * @param nodemean_flag Don't demean the input files
     * @param threshold Threshold (default 0.1)
     * @param decimal_places Number of decimal places to display in output (default 2)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslcc" as const,
        "first_input": first_input,
        "second_input": second_input,
        "noabs_flag": noabs_flag,
        "nodemean_flag": nodemean_flag,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (decimal_places !== null) {
        params["decimal_places"] = decimal_places;
    }
    return params;
}


function fslcc_cargs(
    params: FslccParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslcc");
    cargs.push(execution.inputFile((params["first_input"] ?? null)));
    cargs.push(execution.inputFile((params["second_input"] ?? null)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["noabs_flag"] ?? null)) {
        cargs.push("--noabs");
    }
    if ((params["nodemean_flag"] ?? null)) {
        cargs.push("--nodemean");
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-t",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["decimal_places"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["decimal_places"] ?? null))
        );
    }
    return cargs;
}


function fslcc_outputs(
    params: FslccParameters,
    execution: Execution,
): FslccOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslccOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fslcc_execute(
    params: FslccParameters,
    execution: Execution,
): FslccOutputs {
    /**
     * Cross-correlate two time-series, timepoint by timepoint.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslccOutputs`).
     */
    params = execution.params(params)
    const cargs = fslcc_cargs(params, execution)
    const ret = fslcc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslcc(
    first_input: InputPathType,
    second_input: InputPathType,
    mask: InputPathType | null = null,
    noabs_flag: boolean = false,
    nodemean_flag: boolean = false,
    threshold: number | null = 0.1,
    decimal_places: number | null = 2,
    runner: Runner | null = null,
): FslccOutputs {
    /**
     * Cross-correlate two time-series, timepoint by timepoint.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param first_input First input time-series
     * @param second_input Second input time-series
     * @param mask Mask file name
     * @param noabs_flag Don't return absolute values (keep sign)
     * @param nodemean_flag Don't demean the input files
     * @param threshold Threshold (default 0.1)
     * @param decimal_places Number of decimal places to display in output (default 2)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslccOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLCC_METADATA);
    const params = fslcc_params(first_input, second_input, mask, noabs_flag, nodemean_flag, threshold, decimal_places)
    return fslcc_execute(params, execution);
}


export {
      FSLCC_METADATA,
      FslccOutputs,
      FslccParameters,
      fslcc,
      fslcc_params,
};
