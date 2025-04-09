// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_CORRELATION_METADATA: Metadata = {
    id: "759256b0c8bab6d5c67ad2ff854228a1103f8688.boutiques",
    name: "cifti-correlation",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiCorrelationRoiOverrideParameters {
    "__STYXTYPE__": "roi_override";
    "opt_left_roi_roi_metric"?: InputPathType | null | undefined;
    "opt_right_roi_roi_metric"?: InputPathType | null | undefined;
    "opt_cerebellum_roi_roi_metric"?: InputPathType | null | undefined;
    "opt_vol_roi_roi_vol"?: InputPathType | null | undefined;
    "opt_cifti_roi_roi_cifti"?: InputPathType | null | undefined;
}


interface CiftiCorrelationParameters {
    "__STYXTYPE__": "cifti-correlation";
    "cifti": InputPathType;
    "cifti_out": string;
    "roi_override"?: CiftiCorrelationRoiOverrideParameters | null | undefined;
    "opt_weights_weight_file"?: string | null | undefined;
    "opt_fisher_z": boolean;
    "opt_no_demean": boolean;
    "opt_covariance": boolean;
    "opt_mem_limit_limit_gb"?: number | null | undefined;
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
        "cifti-correlation": cifti_correlation_cargs,
        "roi_override": cifti_correlation_roi_override_cargs,
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
        "cifti-correlation": cifti_correlation_outputs,
    };
    return outputsFuncs[t];
}


function cifti_correlation_roi_override_params(
    opt_left_roi_roi_metric: InputPathType | null = null,
    opt_right_roi_roi_metric: InputPathType | null = null,
    opt_cerebellum_roi_roi_metric: InputPathType | null = null,
    opt_vol_roi_roi_vol: InputPathType | null = null,
    opt_cifti_roi_roi_cifti: InputPathType | null = null,
): CiftiCorrelationRoiOverrideParameters {
    /**
     * Build parameters.
    
     * @param opt_left_roi_roi_metric use an roi for left hempsphere: the left roi as a metric file
     * @param opt_right_roi_roi_metric use an roi for right hempsphere: the right roi as a metric file
     * @param opt_cerebellum_roi_roi_metric use an roi for cerebellum: the cerebellum roi as a metric file
     * @param opt_vol_roi_roi_vol use an roi for volume: the volume roi file
     * @param opt_cifti_roi_roi_cifti use a cifti file for combined rois: the cifti roi file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "roi_override" as const,
    };
    if (opt_left_roi_roi_metric !== null) {
        params["opt_left_roi_roi_metric"] = opt_left_roi_roi_metric;
    }
    if (opt_right_roi_roi_metric !== null) {
        params["opt_right_roi_roi_metric"] = opt_right_roi_roi_metric;
    }
    if (opt_cerebellum_roi_roi_metric !== null) {
        params["opt_cerebellum_roi_roi_metric"] = opt_cerebellum_roi_roi_metric;
    }
    if (opt_vol_roi_roi_vol !== null) {
        params["opt_vol_roi_roi_vol"] = opt_vol_roi_roi_vol;
    }
    if (opt_cifti_roi_roi_cifti !== null) {
        params["opt_cifti_roi_roi_cifti"] = opt_cifti_roi_roi_cifti;
    }
    return params;
}


function cifti_correlation_roi_override_cargs(
    params: CiftiCorrelationRoiOverrideParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-roi-override");
    if ((params["opt_left_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-left-roi",
            execution.inputFile((params["opt_left_roi_roi_metric"] ?? null))
        );
    }
    if ((params["opt_right_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-right-roi",
            execution.inputFile((params["opt_right_roi_roi_metric"] ?? null))
        );
    }
    if ((params["opt_cerebellum_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-cerebellum-roi",
            execution.inputFile((params["opt_cerebellum_roi_roi_metric"] ?? null))
        );
    }
    if ((params["opt_vol_roi_roi_vol"] ?? null) !== null) {
        cargs.push(
            "-vol-roi",
            execution.inputFile((params["opt_vol_roi_roi_vol"] ?? null))
        );
    }
    if ((params["opt_cifti_roi_roi_cifti"] ?? null) !== null) {
        cargs.push(
            "-cifti-roi",
            execution.inputFile((params["opt_cifti_roi_roi_cifti"] ?? null))
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_correlation(...)`.
 *
 * @interface
 */
interface CiftiCorrelationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_correlation_params(
    cifti: InputPathType,
    cifti_out: string,
    roi_override: CiftiCorrelationRoiOverrideParameters | null = null,
    opt_weights_weight_file: string | null = null,
    opt_fisher_z: boolean = false,
    opt_no_demean: boolean = false,
    opt_covariance: boolean = false,
    opt_mem_limit_limit_gb: number | null = null,
): CiftiCorrelationParameters {
    /**
     * Build parameters.
    
     * @param cifti input cifti file
     * @param cifti_out output cifti file
     * @param roi_override perform correlation from a subset of rows to all rows
     * @param opt_weights_weight_file specify column weights: text file containing one weight per column
     * @param opt_fisher_z apply fisher small z transform (ie, artanh) to correlation
     * @param opt_no_demean instead of correlation, do dot product of rows, then normalize by diagonal
     * @param opt_covariance compute covariance instead of correlation
     * @param opt_mem_limit_limit_gb restrict memory usage: memory limit in gigabytes
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-correlation" as const,
        "cifti": cifti,
        "cifti_out": cifti_out,
        "opt_fisher_z": opt_fisher_z,
        "opt_no_demean": opt_no_demean,
        "opt_covariance": opt_covariance,
    };
    if (roi_override !== null) {
        params["roi_override"] = roi_override;
    }
    if (opt_weights_weight_file !== null) {
        params["opt_weights_weight_file"] = opt_weights_weight_file;
    }
    if (opt_mem_limit_limit_gb !== null) {
        params["opt_mem_limit_limit_gb"] = opt_mem_limit_limit_gb;
    }
    return params;
}


function cifti_correlation_cargs(
    params: CiftiCorrelationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-correlation");
    cargs.push(execution.inputFile((params["cifti"] ?? null)));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["roi_override"] ?? null) !== null) {
        cargs.push(...dynCargs((params["roi_override"] ?? null).__STYXTYPE__)((params["roi_override"] ?? null), execution));
    }
    if ((params["opt_weights_weight_file"] ?? null) !== null) {
        cargs.push(
            "-weights",
            (params["opt_weights_weight_file"] ?? null)
        );
    }
    if ((params["opt_fisher_z"] ?? null)) {
        cargs.push("-fisher-z");
    }
    if ((params["opt_no_demean"] ?? null)) {
        cargs.push("-no-demean");
    }
    if ((params["opt_covariance"] ?? null)) {
        cargs.push("-covariance");
    }
    if ((params["opt_mem_limit_limit_gb"] ?? null) !== null) {
        cargs.push(
            "-mem-limit",
            String((params["opt_mem_limit_limit_gb"] ?? null))
        );
    }
    return cargs;
}


function cifti_correlation_outputs(
    params: CiftiCorrelationParameters,
    execution: Execution,
): CiftiCorrelationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiCorrelationOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_correlation_execute(
    params: CiftiCorrelationParameters,
    execution: Execution,
): CiftiCorrelationOutputs {
    /**
     * Generate correlation of rows in a cifti file.
     * 
     * For each row (or each row inside an roi if -roi-override is specified), correlate to all other rows.  The -cifti-roi suboption to -roi-override may not be specified with any other -*-roi suboption, but you may specify the other -*-roi suboptions together.
     * 
     * When using the -fisher-z option, the output is NOT a Z-score, it is artanh(r), to do further math on this output, consider using -cifti-math.
     * 
     * Restricting the memory usage will make it calculate the output in chunks, and if the input file size is more than 70% of the memory limit, it will also read through the input file as rows are required, resulting in several passes through the input file (once per chunk).  Memory limit does not need to be an integer, you may also specify 0 to calculate a single output row at a time (this may be very slow).
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiCorrelationOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_correlation_cargs(params, execution)
    const ret = cifti_correlation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_correlation(
    cifti: InputPathType,
    cifti_out: string,
    roi_override: CiftiCorrelationRoiOverrideParameters | null = null,
    opt_weights_weight_file: string | null = null,
    opt_fisher_z: boolean = false,
    opt_no_demean: boolean = false,
    opt_covariance: boolean = false,
    opt_mem_limit_limit_gb: number | null = null,
    runner: Runner | null = null,
): CiftiCorrelationOutputs {
    /**
     * Generate correlation of rows in a cifti file.
     * 
     * For each row (or each row inside an roi if -roi-override is specified), correlate to all other rows.  The -cifti-roi suboption to -roi-override may not be specified with any other -*-roi suboption, but you may specify the other -*-roi suboptions together.
     * 
     * When using the -fisher-z option, the output is NOT a Z-score, it is artanh(r), to do further math on this output, consider using -cifti-math.
     * 
     * Restricting the memory usage will make it calculate the output in chunks, and if the input file size is more than 70% of the memory limit, it will also read through the input file as rows are required, resulting in several passes through the input file (once per chunk).  Memory limit does not need to be an integer, you may also specify 0 to calculate a single output row at a time (this may be very slow).
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti input cifti file
     * @param cifti_out output cifti file
     * @param roi_override perform correlation from a subset of rows to all rows
     * @param opt_weights_weight_file specify column weights: text file containing one weight per column
     * @param opt_fisher_z apply fisher small z transform (ie, artanh) to correlation
     * @param opt_no_demean instead of correlation, do dot product of rows, then normalize by diagonal
     * @param opt_covariance compute covariance instead of correlation
     * @param opt_mem_limit_limit_gb restrict memory usage: memory limit in gigabytes
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiCorrelationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_CORRELATION_METADATA);
    const params = cifti_correlation_params(cifti, cifti_out, roi_override, opt_weights_weight_file, opt_fisher_z, opt_no_demean, opt_covariance, opt_mem_limit_limit_gb)
    return cifti_correlation_execute(params, execution);
}


export {
      CIFTI_CORRELATION_METADATA,
      CiftiCorrelationOutputs,
      CiftiCorrelationParameters,
      CiftiCorrelationRoiOverrideParameters,
      cifti_correlation,
      cifti_correlation_params,
      cifti_correlation_roi_override_params,
};
