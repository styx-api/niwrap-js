// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SWAP_SUBJECTWISE_METADATA: Metadata = {
    id: "5af24925494f3011f02c35b796b9bf8904045912.boutiques",
    name: "swap_subjectwise",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SwapSubjectwiseParameters {
    "__STYXTYPE__": "swap_subjectwise";
    "dyads": InputPathType;
    "fmean": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "obasename"?: string | null | undefined;
    "xthresh"?: number | null | undefined;
    "averageonly_flag": boolean;
    "verbose_flag": boolean;
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
        "swap_subjectwise": swap_subjectwise_cargs,
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
 * Output object returned when calling `swap_subjectwise(...)`.
 *
 * @interface
 */
interface SwapSubjectwiseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function swap_subjectwise_params(
    dyads: InputPathType,
    fmean: InputPathType,
    mask: InputPathType | null = null,
    obasename: string | null = null,
    xthresh: number | null = null,
    averageonly_flag: boolean = false,
    verbose_flag: boolean = false,
): SwapSubjectwiseParameters {
    /**
     * Build parameters.
    
     * @param dyads List of list of dyads
     * @param fmean List of list of mean fsamples
     * @param mask Filename of brain mask
     * @param obasename Output obasename [default=swapped]
     * @param xthresh A.R.D. threshold - default=0.1
     * @param averageonly_flag Average only?
     * @param verbose_flag Switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "swap_subjectwise" as const,
        "dyads": dyads,
        "fmean": fmean,
        "averageonly_flag": averageonly_flag,
        "verbose_flag": verbose_flag,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (obasename !== null) {
        params["obasename"] = obasename;
    }
    if (xthresh !== null) {
        params["xthresh"] = xthresh;
    }
    return params;
}


function swap_subjectwise_cargs(
    params: SwapSubjectwiseParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("swap_subjectwise");
    cargs.push(
        "-r",
        execution.inputFile((params["dyads"] ?? null))
    );
    cargs.push(
        "-f",
        execution.inputFile((params["fmean"] ?? null))
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["obasename"] ?? null) !== null) {
        cargs.push(
            "-b",
            (params["obasename"] ?? null)
        );
    }
    if ((params["xthresh"] ?? null) !== null) {
        cargs.push(
            "--xthresh",
            String((params["xthresh"] ?? null))
        );
    }
    if ((params["averageonly_flag"] ?? null)) {
        cargs.push("--averageonly");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("--verbose");
    }
    return cargs;
}


function swap_subjectwise_outputs(
    params: SwapSubjectwiseParameters,
    execution: Execution,
): SwapSubjectwiseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SwapSubjectwiseOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function swap_subjectwise_execute(
    params: SwapSubjectwiseParameters,
    execution: Execution,
): SwapSubjectwiseOutputs {
    /**
     * Reordering of the dyadic vectors and fsamples according to average inter-subject modal orientations.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SwapSubjectwiseOutputs`).
     */
    params = execution.params(params)
    const cargs = swap_subjectwise_cargs(params, execution)
    const ret = swap_subjectwise_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function swap_subjectwise(
    dyads: InputPathType,
    fmean: InputPathType,
    mask: InputPathType | null = null,
    obasename: string | null = null,
    xthresh: number | null = null,
    averageonly_flag: boolean = false,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): SwapSubjectwiseOutputs {
    /**
     * Reordering of the dyadic vectors and fsamples according to average inter-subject modal orientations.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param dyads List of list of dyads
     * @param fmean List of list of mean fsamples
     * @param mask Filename of brain mask
     * @param obasename Output obasename [default=swapped]
     * @param xthresh A.R.D. threshold - default=0.1
     * @param averageonly_flag Average only?
     * @param verbose_flag Switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SwapSubjectwiseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SWAP_SUBJECTWISE_METADATA);
    const params = swap_subjectwise_params(dyads, fmean, mask, obasename, xthresh, averageonly_flag, verbose_flag)
    return swap_subjectwise_execute(params, execution);
}


export {
      SWAP_SUBJECTWISE_METADATA,
      SwapSubjectwiseOutputs,
      SwapSubjectwiseParameters,
      swap_subjectwise,
      swap_subjectwise_params,
};
