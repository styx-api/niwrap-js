// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1D_CORRELATE_METADATA: Metadata = {
    id: "0c8b033bab4ae61173f8a8fe163e6bc4b7413472.boutiques",
    name: "1dCorrelate",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dCorrelateParameters {
    "__STYXTYPE__": "1dCorrelate";
    "ktaub": boolean;
    "nboot"?: number | null | undefined;
    "alpha"?: number | null | undefined;
    "block": boolean;
    "blk": boolean;
    "pearson": boolean;
    "spearman": boolean;
    "quadrant": boolean;
    "input_files": Array<InputPathType>;
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
        "1dCorrelate": v_1d_correlate_cargs,
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
 * Output object returned when calling `v_1d_correlate(...)`.
 *
 * @interface
 */
interface V1dCorrelateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_1d_correlate_params(
    input_files: Array<InputPathType>,
    ktaub: boolean = false,
    nboot: number | null = null,
    alpha: number | null = null,
    block: boolean = false,
    blk: boolean = false,
    pearson: boolean = false,
    spearman: boolean = false,
    quadrant: boolean = false,
): V1dCorrelateParameters {
    /**
     * Build parameters.
    
     * @param input_files Input 1D files
     * @param ktaub Kendall's tau_b correlation (popular somewhere, maybe)
     * @param nboot Set the number of bootstrap replicates
     * @param alpha Set the 2-sided confidence interval width to '100-A' percent.
     * @param block Use variable-length block resampling to account for serial correlation
     * @param blk Alternate flag for variable-length block resampling
     * @param pearson Pearson correlation (the default method)
     * @param spearman Spearman (rank) correlation (more robust versus outliers)
     * @param quadrant Quadrant (binarized) correlation (most robust, but weaker)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dCorrelate" as const,
        "ktaub": ktaub,
        "block": block,
        "blk": blk,
        "pearson": pearson,
        "spearman": spearman,
        "quadrant": quadrant,
        "input_files": input_files,
    };
    if (nboot !== null) {
        params["nboot"] = nboot;
    }
    if (alpha !== null) {
        params["alpha"] = alpha;
    }
    return params;
}


function v_1d_correlate_cargs(
    params: V1dCorrelateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dCorrelate");
    if ((params["ktaub"] ?? null)) {
        cargs.push("-Ktaub");
    }
    if ((params["nboot"] ?? null) !== null) {
        cargs.push(
            "-nboot",
            String((params["nboot"] ?? null))
        );
    }
    if ((params["alpha"] ?? null) !== null) {
        cargs.push(
            "-alpha",
            String((params["alpha"] ?? null))
        );
    }
    if ((params["block"] ?? null)) {
        cargs.push("-block");
    }
    if ((params["blk"] ?? null)) {
        cargs.push("-blk");
    }
    if ((params["pearson"] ?? null)) {
        cargs.push("-Pearson");
    }
    if ((params["spearman"] ?? null)) {
        cargs.push("-Spearman");
    }
    if ((params["quadrant"] ?? null)) {
        cargs.push("-Quadrant");
    }
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function v_1d_correlate_outputs(
    params: V1dCorrelateParameters,
    execution: Execution,
): V1dCorrelateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dCorrelateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_1d_correlate_execute(
    params: V1dCorrelateParameters,
    execution: Execution,
): V1dCorrelateOutputs {
    /**
     * 1dCorrelate calculates the correlation coefficients between columns of input 1D files along with confidence intervals via a bootstrap procedure.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dCorrelateOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1d_correlate_cargs(params, execution)
    const ret = v_1d_correlate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1d_correlate(
    input_files: Array<InputPathType>,
    ktaub: boolean = false,
    nboot: number | null = null,
    alpha: number | null = null,
    block: boolean = false,
    blk: boolean = false,
    pearson: boolean = false,
    spearman: boolean = false,
    quadrant: boolean = false,
    runner: Runner | null = null,
): V1dCorrelateOutputs {
    /**
     * 1dCorrelate calculates the correlation coefficients between columns of input 1D files along with confidence intervals via a bootstrap procedure.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input 1D files
     * @param ktaub Kendall's tau_b correlation (popular somewhere, maybe)
     * @param nboot Set the number of bootstrap replicates
     * @param alpha Set the 2-sided confidence interval width to '100-A' percent.
     * @param block Use variable-length block resampling to account for serial correlation
     * @param blk Alternate flag for variable-length block resampling
     * @param pearson Pearson correlation (the default method)
     * @param spearman Spearman (rank) correlation (more robust versus outliers)
     * @param quadrant Quadrant (binarized) correlation (most robust, but weaker)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dCorrelateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1D_CORRELATE_METADATA);
    const params = v_1d_correlate_params(input_files, ktaub, nboot, alpha, block, blk, pearson, spearman, quadrant)
    return v_1d_correlate_execute(params, execution);
}


export {
      V1dCorrelateOutputs,
      V1dCorrelateParameters,
      V_1D_CORRELATE_METADATA,
      v_1d_correlate,
      v_1d_correlate_params,
};
