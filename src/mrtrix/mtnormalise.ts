// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MTNORMALISE_METADATA: Metadata = {
    id: "3709b0ca1455372ea3dda75e22e31168270b187c.boutiques",
    name: "mtnormalise",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface MtnormaliseConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface MtnormaliseInputOutputParameters {
    "__STYXTYPE__": "input_output";
    "input": InputPathType;
    "output": string;
}


interface MtnormaliseParameters {
    "__STYXTYPE__": "mtnormalise";
    "mask": InputPathType;
    "order"?: string | null | undefined;
    "niter"?: Array<number> | null | undefined;
    "reference"?: number | null | undefined;
    "balanced": boolean;
    "check_norm"?: string | null | undefined;
    "check_mask"?: string | null | undefined;
    "check_factors"?: string | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<MtnormaliseConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input_output": Array<MtnormaliseInputOutputParameters>;
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
        "mtnormalise": mtnormalise_cargs,
        "config": mtnormalise_config_cargs,
        "input_output": mtnormalise_input_output_cargs,
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
        "mtnormalise": mtnormalise_outputs,
        "input_output": mtnormalise_input_output_outputs,
    };
    return outputsFuncs[t];
}


function mtnormalise_config_params(
    key: string,
    value: string,
): MtnormaliseConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function mtnormalise_config_cargs(
    params: MtnormaliseConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `Array<MtnormaliseInputOutputParameters>(...)`.
 *
 * @interface
 */
interface MtnormaliseInputOutputOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * output normalised tissue compartment image.
     */
    output: OutputPathType;
}


function mtnormalise_input_output_params(
    input: InputPathType,
    output: string,
): MtnormaliseInputOutputParameters {
    /**
     * Build parameters.
    
     * @param input input tissue compartment image.
     * @param output output normalised tissue compartment image.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "input_output" as const,
        "input": input,
        "output": output,
    };
    return params;
}


function mtnormalise_input_output_cargs(
    params: MtnormaliseInputOutputParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function mtnormalise_input_output_outputs(
    params: MtnormaliseInputOutputParameters,
    execution: Execution,
): MtnormaliseInputOutputOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MtnormaliseInputOutputOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


/**
 * Output object returned when calling `mtnormalise(...)`.
 *
 * @interface
 */
interface MtnormaliseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * output the final estimated spatially varying intensity level that is used for normalisation. 
     */
    check_norm: OutputPathType | null;
    /**
     * output the final mask used to compute the normalisation. This mask excludes regions identified as outliers by the optimisation process. 
     */
    check_mask: OutputPathType | null;
    /**
     * output the tissue balance factors computed during normalisation. 
     */
    check_factors: OutputPathType | null;
    /**
     * Outputs from `mtnormalise_input_output_outputs`.This is a list of outputs with the same length and order as the inputs.
     */
    input_output: Array<MtnormaliseInputOutputOutputs>;
}


function mtnormalise_params(
    mask: InputPathType,
    input_output: Array<MtnormaliseInputOutputParameters>,
    order: string | null = null,
    niter: Array<number> | null = null,
    reference: number | null = null,
    balanced: boolean = false,
    check_norm: string | null = null,
    check_mask: string | null = null,
    check_factors: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MtnormaliseConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): MtnormaliseParameters {
    /**
     * Build parameters.
    
     * @param mask the mask defines the data used to compute the intensity normalisation. This option is mandatory.
     * @param input_output list of all input and output tissue compartment files (see example usage).
     * @param order the maximum order of the polynomial basis used to fit the normalisation field in the log-domain. An order of 0 is equivalent to not allowing spatial variance of the intensity normalisation factor. (default: 3)
     * @param niter set the number of iterations. The first (and potentially only) entry applies to the main loop. If supplied as a comma-separated list of integers, the second entry applies to the inner loop to update the balance factors (default: 15,7).
     * @param reference specify the (positive) reference value to which the summed tissue compartments will be normalised. (default: 0.282095, SH DC term for unit angular integral)
     * @param balanced incorporate the per-tissue balancing factors into scaling of the output images (NOTE: use of this option has critical consequences for AFD intensity normalisation; should not be used unless these consequences are fully understood)
     * @param check_norm output the final estimated spatially varying intensity level that is used for normalisation.
     * @param check_mask output the final mask used to compute the normalisation. This mask excludes regions identified as outliers by the optimisation process.
     * @param check_factors output the tissue balance factors computed during normalisation.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mtnormalise" as const,
        "mask": mask,
        "balanced": balanced,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input_output": input_output,
    };
    if (order !== null) {
        params["order"] = order;
    }
    if (niter !== null) {
        params["niter"] = niter;
    }
    if (reference !== null) {
        params["reference"] = reference;
    }
    if (check_norm !== null) {
        params["check_norm"] = check_norm;
    }
    if (check_mask !== null) {
        params["check_mask"] = check_mask;
    }
    if (check_factors !== null) {
        params["check_factors"] = check_factors;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function mtnormalise_cargs(
    params: MtnormaliseParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mtnormalise");
    cargs.push(
        "-mask",
        execution.inputFile((params["mask"] ?? null))
    );
    if ((params["order"] ?? null) !== null) {
        cargs.push(
            "-order",
            (params["order"] ?? null)
        );
    }
    if ((params["niter"] ?? null) !== null) {
        cargs.push(
            "-niter",
            (params["niter"] ?? null).map(String).join(",")
        );
    }
    if ((params["reference"] ?? null) !== null) {
        cargs.push(
            "-reference",
            String((params["reference"] ?? null))
        );
    }
    if ((params["balanced"] ?? null)) {
        cargs.push("-balanced");
    }
    if ((params["check_norm"] ?? null) !== null) {
        cargs.push(
            "-check_norm",
            (params["check_norm"] ?? null)
        );
    }
    if ((params["check_mask"] ?? null) !== null) {
        cargs.push(
            "-check_mask",
            (params["check_mask"] ?? null)
        );
    }
    if ((params["check_factors"] ?? null) !== null) {
        cargs.push(
            "-check_factors",
            (params["check_factors"] ?? null)
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(...(params["input_output"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    return cargs;
}


function mtnormalise_outputs(
    params: MtnormaliseParameters,
    execution: Execution,
): MtnormaliseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MtnormaliseOutputs = {
        root: execution.outputFile("."),
        check_norm: ((params["check_norm"] ?? null) !== null) ? execution.outputFile([(params["check_norm"] ?? null)].join('')) : null,
        check_mask: ((params["check_mask"] ?? null) !== null) ? execution.outputFile([(params["check_mask"] ?? null)].join('')) : null,
        check_factors: ((params["check_factors"] ?? null) !== null) ? execution.outputFile([(params["check_factors"] ?? null)].join('')) : null,
        input_output: (params["input_output"] ?? null).map(i => dynOutputs(i.__STYXTYPE__)?.(i, execution) ?? null),
    };
    return ret;
}


function mtnormalise_execute(
    params: MtnormaliseParameters,
    execution: Execution,
): MtnormaliseOutputs {
    /**
     * Multi-tissue informed log-domain intensity normalisation.
     * 
     * This command takes as input any number of tissue components (e.g. from multi-tissue CSD) and outputs corresponding normalised tissue components corrected for the effects of (residual) intensity inhomogeneities. Intensity normalisation is performed by optimising the voxel-wise sum of all tissue compartments towards a constant value, under constraints of spatial smoothness (polynomial basis of a given order). Different to the Raffelt et al. 2017 abstract, this algorithm performs this task in the log-domain instead, with added gradual outlier rejection, different handling of the balancing factors between tissue compartments and a different iteration structure.
     * 
     * The -mask option is mandatory and is optimally provided with a brain mask (such as the one obtained from dwi2mask earlier in the processing pipeline). Outlier areas with exceptionally low or high combined tissue contributions are accounted for and reoptimised as the intensity inhomogeneity estimation becomes more accurate.
     * 
     * References:
     * 
     * Raffelt, D.; Dhollander, T.; Tournier, J.-D.; Tabbara, R.; Smith, R. E.; Pierre, E. & Connelly, A. Bias Field Correction and Intensity Normalisation for Quantitative Analysis of Apparent Fibre Density. In Proc. ISMRM, 2017, 26, 3541
     * 
     * Dhollander, T.; Tabbara, R.; Rosnarho-Tornstrand, J.; Tournier, J.-D.; Raffelt, D. & Connelly, A. Multi-tissue log-domain intensity and inhomogeneity normalisation for quantitative apparent fibre density. In Proc. ISMRM, 2021, 29, 2472.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MtnormaliseOutputs`).
     */
    params = execution.params(params)
    const cargs = mtnormalise_cargs(params, execution)
    const ret = mtnormalise_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mtnormalise(
    mask: InputPathType,
    input_output: Array<MtnormaliseInputOutputParameters>,
    order: string | null = null,
    niter: Array<number> | null = null,
    reference: number | null = null,
    balanced: boolean = false,
    check_norm: string | null = null,
    check_mask: string | null = null,
    check_factors: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MtnormaliseConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MtnormaliseOutputs {
    /**
     * Multi-tissue informed log-domain intensity normalisation.
     * 
     * This command takes as input any number of tissue components (e.g. from multi-tissue CSD) and outputs corresponding normalised tissue components corrected for the effects of (residual) intensity inhomogeneities. Intensity normalisation is performed by optimising the voxel-wise sum of all tissue compartments towards a constant value, under constraints of spatial smoothness (polynomial basis of a given order). Different to the Raffelt et al. 2017 abstract, this algorithm performs this task in the log-domain instead, with added gradual outlier rejection, different handling of the balancing factors between tissue compartments and a different iteration structure.
     * 
     * The -mask option is mandatory and is optimally provided with a brain mask (such as the one obtained from dwi2mask earlier in the processing pipeline). Outlier areas with exceptionally low or high combined tissue contributions are accounted for and reoptimised as the intensity inhomogeneity estimation becomes more accurate.
     * 
     * References:
     * 
     * Raffelt, D.; Dhollander, T.; Tournier, J.-D.; Tabbara, R.; Smith, R. E.; Pierre, E. & Connelly, A. Bias Field Correction and Intensity Normalisation for Quantitative Analysis of Apparent Fibre Density. In Proc. ISMRM, 2017, 26, 3541
     * 
     * Dhollander, T.; Tabbara, R.; Rosnarho-Tornstrand, J.; Tournier, J.-D.; Raffelt, D. & Connelly, A. Multi-tissue log-domain intensity and inhomogeneity normalisation for quantitative apparent fibre density. In Proc. ISMRM, 2021, 29, 2472.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param mask the mask defines the data used to compute the intensity normalisation. This option is mandatory.
     * @param input_output list of all input and output tissue compartment files (see example usage).
     * @param order the maximum order of the polynomial basis used to fit the normalisation field in the log-domain. An order of 0 is equivalent to not allowing spatial variance of the intensity normalisation factor. (default: 3)
     * @param niter set the number of iterations. The first (and potentially only) entry applies to the main loop. If supplied as a comma-separated list of integers, the second entry applies to the inner loop to update the balance factors (default: 15,7).
     * @param reference specify the (positive) reference value to which the summed tissue compartments will be normalised. (default: 0.282095, SH DC term for unit angular integral)
     * @param balanced incorporate the per-tissue balancing factors into scaling of the output images (NOTE: use of this option has critical consequences for AFD intensity normalisation; should not be used unless these consequences are fully understood)
     * @param check_norm output the final estimated spatially varying intensity level that is used for normalisation.
     * @param check_mask output the final mask used to compute the normalisation. This mask excludes regions identified as outliers by the optimisation process.
     * @param check_factors output the tissue balance factors computed during normalisation.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MtnormaliseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MTNORMALISE_METADATA);
    const params = mtnormalise_params(mask, input_output, order, niter, reference, balanced, check_norm, check_mask, check_factors, info, quiet, debug, force, nthreads, config, help, version)
    return mtnormalise_execute(params, execution);
}


export {
      MTNORMALISE_METADATA,
      MtnormaliseConfigParameters,
      MtnormaliseInputOutputOutputs,
      MtnormaliseInputOutputParameters,
      MtnormaliseOutputs,
      MtnormaliseParameters,
      mtnormalise,
      mtnormalise_config_params,
      mtnormalise_input_output_params,
      mtnormalise_params,
};
