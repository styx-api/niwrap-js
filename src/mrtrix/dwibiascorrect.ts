// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DWIBIASCORRECT_METADATA: Metadata = {
    id: "dac5427c31c92afc7a68b01d1ea1d2a9c9d5a76c.boutiques",
    name: "dwibiascorrect",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface DwibiascorrectFslgradParameters {
    "__STYXTYPE__": "fslgrad";
    "bvecs": InputPathType;
    "bvals": InputPathType;
}


interface DwibiascorrectConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface DwibiascorrectParameters {
    "__STYXTYPE__": "dwibiascorrect";
    "algorithm": string;
    "input_image": InputPathType;
    "output_image": string;
    "grad"?: InputPathType | null | undefined;
    "fslgrad"?: DwibiascorrectFslgradParameters | null | undefined;
    "mask_image"?: InputPathType | null | undefined;
    "bias_image"?: InputPathType | null | undefined;
    "nocleanup": boolean;
    "scratch_dir"?: InputPathType | null | undefined;
    "continue_scratch_dir"?: Array<InputPathType> | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<DwibiascorrectConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "ants_b"?: string | null | undefined;
    "ants_c"?: string | null | undefined;
    "ants_s"?: string | null | undefined;
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
        "dwibiascorrect": dwibiascorrect_cargs,
        "fslgrad": dwibiascorrect_fslgrad_cargs,
        "config": dwibiascorrect_config_cargs,
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
        "dwibiascorrect": dwibiascorrect_outputs,
    };
    return outputsFuncs[t];
}


function dwibiascorrect_fslgrad_params(
    bvecs: InputPathType,
    bvals: InputPathType,
): DwibiascorrectFslgradParameters {
    /**
     * Build parameters.
    
     * @param bvecs Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param bvals Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslgrad" as const,
        "bvecs": bvecs,
        "bvals": bvals,
    };
    return params;
}


function dwibiascorrect_fslgrad_cargs(
    params: DwibiascorrectFslgradParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-fslgrad");
    cargs.push(execution.inputFile((params["bvecs"] ?? null)));
    cargs.push(execution.inputFile((params["bvals"] ?? null)));
    return cargs;
}


function dwibiascorrect_config_params(
    key: string,
    value: string,
): DwibiascorrectConfigParameters {
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


function dwibiascorrect_config_cargs(
    params: DwibiascorrectConfigParameters,
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
 * Output object returned when calling `dwibiascorrect(...)`.
 *
 * @interface
 */
interface DwibiascorrectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the corrected image series
     */
    output_image_file: OutputPathType;
    /**
     * File containing the estimated bias field
     */
    bias_image_file: OutputPathType | null;
}


function dwibiascorrect_params(
    algorithm: string,
    input_image: InputPathType,
    output_image: string,
    grad: InputPathType | null = null,
    fslgrad: DwibiascorrectFslgradParameters | null = null,
    mask_image: InputPathType | null = null,
    bias_image: InputPathType | null = null,
    nocleanup: boolean = false,
    scratch_dir: InputPathType | null = null,
    continue_scratch_dir: Array<InputPathType> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DwibiascorrectConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    ants_b: string | null = null,
    ants_c: string | null = null,
    ants_s: string | null = null,
): DwibiascorrectParameters {
    /**
     * Build parameters.
    
     * @param algorithm Select the algorithm to be used for bias correction. Options are: ants, fsl
     * @param input_image The input image series to be corrected
     * @param output_image The output corrected image series
     * @param grad Provide the diffusion gradient table in MRtrix format
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param mask_image Manually provide a mask image for bias field estimation
     * @param bias_image Output the estimated bias field
     * @param nocleanup Do not delete intermediate files during script execution, and do not delete scratch directory at script completion
     * @param scratch_dir Manually specify the path in which to generate the scratch directory
     * @param continue_scratch_dir Continue the script from a previous execution; must provide the scratch directory path
     * @param info Display information messages
     * @param quiet Do not display information messages or progress status
     * @param debug Display debugging messages
     * @param force Force overwrite of output files
     * @param nthreads Use this number of threads in multi-threaded applications (set to 0 to disable multi-threading)
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help Display help information and exit
     * @param version Display version information and exit
     * @param ants_b N4BiasFieldCorrection option -b (initial mesh resolution in mm, spline order)
     * @param ants_c N4BiasFieldCorrection option -c (number of iterations, convergence threshold)
     * @param ants_s N4BiasFieldCorrection option -s (shrink-factor applied to spatial dimensions)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dwibiascorrect" as const,
        "algorithm": algorithm,
        "input_image": input_image,
        "output_image": output_image,
        "nocleanup": nocleanup,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
    };
    if (grad !== null) {
        params["grad"] = grad;
    }
    if (fslgrad !== null) {
        params["fslgrad"] = fslgrad;
    }
    if (mask_image !== null) {
        params["mask_image"] = mask_image;
    }
    if (bias_image !== null) {
        params["bias_image"] = bias_image;
    }
    if (scratch_dir !== null) {
        params["scratch_dir"] = scratch_dir;
    }
    if (continue_scratch_dir !== null) {
        params["continue_scratch_dir"] = continue_scratch_dir;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    if (ants_b !== null) {
        params["ants_b"] = ants_b;
    }
    if (ants_c !== null) {
        params["ants_c"] = ants_c;
    }
    if (ants_s !== null) {
        params["ants_s"] = ants_s;
    }
    return params;
}


function dwibiascorrect_cargs(
    params: DwibiascorrectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dwibiascorrect");
    cargs.push((params["algorithm"] ?? null));
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    if ((params["grad"] ?? null) !== null) {
        cargs.push(
            "-grad",
            execution.inputFile((params["grad"] ?? null))
        );
    }
    if ((params["fslgrad"] ?? null) !== null) {
        cargs.push(...dynCargs((params["fslgrad"] ?? null).__STYXTYPE__)((params["fslgrad"] ?? null), execution));
    }
    if ((params["mask_image"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask_image"] ?? null))
        );
    }
    if ((params["bias_image"] ?? null) !== null) {
        cargs.push(
            "-bias",
            execution.inputFile((params["bias_image"] ?? null))
        );
    }
    if ((params["nocleanup"] ?? null)) {
        cargs.push("-nocleanup");
    }
    if ((params["scratch_dir"] ?? null) !== null) {
        cargs.push(
            "-scratch",
            execution.inputFile((params["scratch_dir"] ?? null))
        );
    }
    if ((params["continue_scratch_dir"] ?? null) !== null) {
        cargs.push(
            "-continue",
            ...(params["continue_scratch_dir"] ?? null).map(f => execution.inputFile(f))
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
    if ((params["ants_b"] ?? null) !== null) {
        cargs.push(
            "-ants.b",
            (params["ants_b"] ?? null)
        );
    }
    if ((params["ants_c"] ?? null) !== null) {
        cargs.push(
            "-ants.c",
            (params["ants_c"] ?? null)
        );
    }
    if ((params["ants_s"] ?? null) !== null) {
        cargs.push(
            "-ants.s",
            (params["ants_s"] ?? null)
        );
    }
    return cargs;
}


function dwibiascorrect_outputs(
    params: DwibiascorrectParameters,
    execution: Execution,
): DwibiascorrectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DwibiascorrectOutputs = {
        root: execution.outputFile("."),
        output_image_file: execution.outputFile([(params["output_image"] ?? null)].join('')),
        bias_image_file: ((params["bias_image"] ?? null) !== null) ? execution.outputFile([path.basename((params["bias_image"] ?? null))].join('')) : null,
    };
    return ret;
}


function dwibiascorrect_execute(
    params: DwibiascorrectParameters,
    execution: Execution,
): DwibiascorrectOutputs {
    /**
     * Perform B1 field inhomogeneity correction for a DWI volume series using either ANTs or FSL.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DwibiascorrectOutputs`).
     */
    params = execution.params(params)
    const cargs = dwibiascorrect_cargs(params, execution)
    const ret = dwibiascorrect_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dwibiascorrect(
    algorithm: string,
    input_image: InputPathType,
    output_image: string,
    grad: InputPathType | null = null,
    fslgrad: DwibiascorrectFslgradParameters | null = null,
    mask_image: InputPathType | null = null,
    bias_image: InputPathType | null = null,
    nocleanup: boolean = false,
    scratch_dir: InputPathType | null = null,
    continue_scratch_dir: Array<InputPathType> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DwibiascorrectConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    ants_b: string | null = null,
    ants_c: string | null = null,
    ants_s: string | null = null,
    runner: Runner | null = null,
): DwibiascorrectOutputs {
    /**
     * Perform B1 field inhomogeneity correction for a DWI volume series using either ANTs or FSL.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param algorithm Select the algorithm to be used for bias correction. Options are: ants, fsl
     * @param input_image The input image series to be corrected
     * @param output_image The output corrected image series
     * @param grad Provide the diffusion gradient table in MRtrix format
     * @param fslgrad Provide the diffusion-weighted gradient scheme used in the acquisition in FSL bvecs/bvals format files. If a diffusion gradient scheme is present in the input image header, the data provided with this option will be instead used.
     * @param mask_image Manually provide a mask image for bias field estimation
     * @param bias_image Output the estimated bias field
     * @param nocleanup Do not delete intermediate files during script execution, and do not delete scratch directory at script completion
     * @param scratch_dir Manually specify the path in which to generate the scratch directory
     * @param continue_scratch_dir Continue the script from a previous execution; must provide the scratch directory path
     * @param info Display information messages
     * @param quiet Do not display information messages or progress status
     * @param debug Display debugging messages
     * @param force Force overwrite of output files
     * @param nthreads Use this number of threads in multi-threaded applications (set to 0 to disable multi-threading)
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help Display help information and exit
     * @param version Display version information and exit
     * @param ants_b N4BiasFieldCorrection option -b (initial mesh resolution in mm, spline order)
     * @param ants_c N4BiasFieldCorrection option -c (number of iterations, convergence threshold)
     * @param ants_s N4BiasFieldCorrection option -s (shrink-factor applied to spatial dimensions)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DwibiascorrectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DWIBIASCORRECT_METADATA);
    const params = dwibiascorrect_params(algorithm, input_image, output_image, grad, fslgrad, mask_image, bias_image, nocleanup, scratch_dir, continue_scratch_dir, info, quiet, debug, force, nthreads, config, help, version, ants_b, ants_c, ants_s)
    return dwibiascorrect_execute(params, execution);
}


export {
      DWIBIASCORRECT_METADATA,
      DwibiascorrectConfigParameters,
      DwibiascorrectFslgradParameters,
      DwibiascorrectOutputs,
      DwibiascorrectParameters,
      dwibiascorrect,
      dwibiascorrect_config_params,
      dwibiascorrect_fslgrad_params,
      dwibiascorrect_params,
};
