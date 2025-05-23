// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FDR_METADATA: Metadata = {
    id: "38262a2e430aeb6077cd46188c492f9fa6205b5d.boutiques",
    name: "fdr",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FdrParameters {
    "__STYXTYPE__": "fdr";
    "infile": InputPathType;
    "maskfile"?: InputPathType | null | undefined;
    "qvalue"?: number | null | undefined;
    "adjustedimage"?: string | null | undefined;
    "othresh_flag": boolean;
    "order_flag": boolean;
    "oneminusp_flag": boolean;
    "positive_corr_flag": boolean;
    "independent_flag": boolean;
    "conservative_flag": boolean;
    "debug_flag": boolean;
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
        "fdr": fdr_cargs,
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
        "fdr": fdr_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fdr(...)`.
 *
 * @interface
 */
interface FdrOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output FDR-adjusted p-values image
     */
    output_adjusted: OutputPathType | null;
    /**
     * Thresholded output p-value image
     */
    output_thresholded: OutputPathType;
    /**
     * Output order values image
     */
    output_order: OutputPathType;
}


function fdr_params(
    infile: InputPathType,
    maskfile: InputPathType | null = null,
    qvalue: number | null = null,
    adjustedimage: string | null = null,
    othresh_flag: boolean = false,
    order_flag: boolean = false,
    oneminusp_flag: boolean = false,
    positive_corr_flag: boolean = false,
    independent_flag: boolean = false,
    conservative_flag: boolean = false,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
): FdrParameters {
    /**
     * Build parameters.
    
     * @param infile Input p-value image file
     * @param maskfile Mask image file
     * @param qvalue Q-value (FDR) threshold
     * @param adjustedimage Output image with FDR-adjusted p-values
     * @param othresh_flag Output a thresholded p-value image
     * @param order_flag Output image of order values
     * @param oneminusp_flag Treat input as 1-p (also save output like this)
     * @param positive_corr_flag Use FDR correction factor that assumes positive correlation
     * @param independent_flag Use FDR correction factor that assumes independence
     * @param conservative_flag Use conservative FDR correction factor (allows for any correlation)
     * @param debug_flag Switch on debugging output
     * @param verbose_flag Switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fdr" as const,
        "infile": infile,
        "othresh_flag": othresh_flag,
        "order_flag": order_flag,
        "oneminusp_flag": oneminusp_flag,
        "positive_corr_flag": positive_corr_flag,
        "independent_flag": independent_flag,
        "conservative_flag": conservative_flag,
        "debug_flag": debug_flag,
        "verbose_flag": verbose_flag,
    };
    if (maskfile !== null) {
        params["maskfile"] = maskfile;
    }
    if (qvalue !== null) {
        params["qvalue"] = qvalue;
    }
    if (adjustedimage !== null) {
        params["adjustedimage"] = adjustedimage;
    }
    return params;
}


function fdr_cargs(
    params: FdrParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fdr");
    cargs.push(
        "-i",
        execution.inputFile((params["infile"] ?? null))
    );
    if ((params["maskfile"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["maskfile"] ?? null))
        );
    }
    if ((params["qvalue"] ?? null) !== null) {
        cargs.push(
            "-q",
            String((params["qvalue"] ?? null))
        );
    }
    if ((params["adjustedimage"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["adjustedimage"] ?? null)
        );
    }
    if ((params["othresh_flag"] ?? null)) {
        cargs.push("--othresh");
    }
    if ((params["order_flag"] ?? null)) {
        cargs.push("--order");
    }
    if ((params["oneminusp_flag"] ?? null)) {
        cargs.push("--oneminusp");
    }
    if ((params["positive_corr_flag"] ?? null)) {
        cargs.push("--positivecorr");
    }
    if ((params["independent_flag"] ?? null)) {
        cargs.push("--independent");
    }
    if ((params["conservative_flag"] ?? null)) {
        cargs.push("--conservative");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function fdr_outputs(
    params: FdrParameters,
    execution: Execution,
): FdrOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FdrOutputs = {
        root: execution.outputFile("."),
        output_adjusted: ((params["adjustedimage"] ?? null) !== null) ? execution.outputFile([(params["adjustedimage"] ?? null), ".nii.gz"].join('')) : null,
        output_thresholded: execution.outputFile([path.basename((params["infile"] ?? null)), "_thr.nii.gz"].join('')),
        output_order: execution.outputFile([path.basename((params["infile"] ?? null)), "_order.nii.gz"].join('')),
    };
    return ret;
}


function fdr_execute(
    params: FdrParameters,
    execution: Execution,
): FdrOutputs {
    /**
     * False Discovery Rate (FDR) correction tool from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FdrOutputs`).
     */
    params = execution.params(params)
    const cargs = fdr_cargs(params, execution)
    const ret = fdr_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fdr(
    infile: InputPathType,
    maskfile: InputPathType | null = null,
    qvalue: number | null = null,
    adjustedimage: string | null = null,
    othresh_flag: boolean = false,
    order_flag: boolean = false,
    oneminusp_flag: boolean = false,
    positive_corr_flag: boolean = false,
    independent_flag: boolean = false,
    conservative_flag: boolean = false,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): FdrOutputs {
    /**
     * False Discovery Rate (FDR) correction tool from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input p-value image file
     * @param maskfile Mask image file
     * @param qvalue Q-value (FDR) threshold
     * @param adjustedimage Output image with FDR-adjusted p-values
     * @param othresh_flag Output a thresholded p-value image
     * @param order_flag Output image of order values
     * @param oneminusp_flag Treat input as 1-p (also save output like this)
     * @param positive_corr_flag Use FDR correction factor that assumes positive correlation
     * @param independent_flag Use FDR correction factor that assumes independence
     * @param conservative_flag Use conservative FDR correction factor (allows for any correlation)
     * @param debug_flag Switch on debugging output
     * @param verbose_flag Switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FdrOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FDR_METADATA);
    const params = fdr_params(infile, maskfile, qvalue, adjustedimage, othresh_flag, order_flag, oneminusp_flag, positive_corr_flag, independent_flag, conservative_flag, debug_flag, verbose_flag)
    return fdr_execute(params, execution);
}


export {
      FDR_METADATA,
      FdrOutputs,
      FdrParameters,
      fdr,
      fdr_params,
};
