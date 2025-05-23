// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FOD2DEC_METADATA: Metadata = {
    id: "91adc9acb5fba88b24df9894f64378c570f25a44.boutiques",
    name: "fod2dec",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Fod2decConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Fod2decParameters {
    "__STYXTYPE__": "fod2dec";
    "mask"?: InputPathType | null | undefined;
    "contrast"?: InputPathType | null | undefined;
    "lum": boolean;
    "lum_coefs"?: Array<number> | null | undefined;
    "lum_gamma"?: number | null | undefined;
    "threshold"?: number | null | undefined;
    "no_weight": boolean;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Fod2decConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
    "output": string;
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
        "fod2dec": fod2dec_cargs,
        "config": fod2dec_config_cargs,
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
        "fod2dec": fod2dec_outputs,
    };
    return outputsFuncs[t];
}


function fod2dec_config_params(
    key: string,
    value: string,
): Fod2decConfigParameters {
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


function fod2dec_config_cargs(
    params: Fod2decConfigParameters,
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
 * Output object returned when calling `fod2dec(...)`.
 *
 * @interface
 */
interface Fod2decOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output DEC image (weighted RGB triplets).
     */
    output: OutputPathType;
}


function fod2dec_params(
    input: InputPathType,
    output: string,
    mask: InputPathType | null = null,
    contrast: InputPathType | null = null,
    lum: boolean = false,
    lum_coefs: Array<number> | null = null,
    lum_gamma: number | null = null,
    threshold: number | null = null,
    no_weight: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Fod2decConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Fod2decParameters {
    /**
     * Build parameters.
    
     * @param input The input FOD image (spherical harmonic coefficients).
     * @param output The output DEC image (weighted RGB triplets).
     * @param mask Only perform DEC computation within the specified mask image.
     * @param contrast Weight the computed DEC map by the provided image contrast. If the contrast has a different image grid, the DEC map is first resliced and renormalised. To achieve panchromatic sharpening, provide an image with a higher spatial resolution than the input FOD image; e.g., a T1 anatomical volume. Only the DEC is subject to the mask, so as to allow for partial colouring of the contrast image. 
Default when this option is *not* provided: integral of input FOD, subject to the same mask/threshold as used for DEC computation.
     * @param lum Correct for luminance/perception, using default values Cr,Cg,Cb = 0.3,0.5,0.2 and gamma = 2.2 (*not* correcting is the theoretical equivalent of Cr,Cg,Cb = 1,1,1 and gamma = 2).
     * @param lum_coefs The coefficients Cr,Cg,Cb to correct for luminance/perception. 
Note: this implicitly switches on luminance/perception correction, using a default gamma = 2.2 unless specified otherwise.
     * @param lum_gamma The gamma value to correct for luminance/perception. 
Note: this implicitly switches on luminance/perception correction, using a default Cr,Cg,Cb = 0.3,0.5,0.2 unless specified otherwise.
     * @param threshold FOD amplitudes below the threshold value are considered zero.
     * @param no_weight Do not weight the DEC map; just output the unweighted colours. Reslicing and renormalising of colours will still happen when providing the -contrast option as a template.
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
        "__STYXTYPE__": "fod2dec" as const,
        "lum": lum,
        "no_weight": no_weight,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
        "output": output,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (contrast !== null) {
        params["contrast"] = contrast;
    }
    if (lum_coefs !== null) {
        params["lum_coefs"] = lum_coefs;
    }
    if (lum_gamma !== null) {
        params["lum_gamma"] = lum_gamma;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function fod2dec_cargs(
    params: Fod2decParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fod2dec");
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["contrast"] ?? null) !== null) {
        cargs.push(
            "-contrast",
            execution.inputFile((params["contrast"] ?? null))
        );
    }
    if ((params["lum"] ?? null)) {
        cargs.push("-lum");
    }
    if ((params["lum_coefs"] ?? null) !== null) {
        cargs.push(
            "-lum_coefs",
            ...(params["lum_coefs"] ?? null).map(String)
        );
    }
    if ((params["lum_gamma"] ?? null) !== null) {
        cargs.push(
            "-lum_gamma",
            String((params["lum_gamma"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-threshold",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["no_weight"] ?? null)) {
        cargs.push("-no_weight");
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
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function fod2dec_outputs(
    params: Fod2decParameters,
    execution: Execution,
): Fod2decOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Fod2decOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function fod2dec_execute(
    params: Fod2decParameters,
    execution: Execution,
): Fod2decOutputs {
    /**
     * Generate FOD-based DEC maps, with optional panchromatic sharpening and/or luminance/perception correction.
     * 
     * By default, the FOD-based DEC is weighted by the integral of the FOD. To weight by another scalar map, use the -contrast option. This option can also be used for panchromatic sharpening, e.g., by supplying a T1 (or other sensible) anatomical volume with a higher spatial resolution.
     * 
     * References:
     * 
     * Dhollander T, Smith RE, Tournier JD, Jeurissen B, Connelly A. Time to move on: an FOD-based DEC map to replace DTI's trademark DEC FA. Proc Intl Soc Mag Reson Med, 2015, 23, 1027
     * 
     * Dhollander T, Raffelt D, Smith RE, Connelly A. Panchromatic sharpening of FOD-based DEC maps by structural T1 information. Proc Intl Soc Mag Reson Med, 2015, 23, 566.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Fod2decOutputs`).
     */
    params = execution.params(params)
    const cargs = fod2dec_cargs(params, execution)
    const ret = fod2dec_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fod2dec(
    input: InputPathType,
    output: string,
    mask: InputPathType | null = null,
    contrast: InputPathType | null = null,
    lum: boolean = false,
    lum_coefs: Array<number> | null = null,
    lum_gamma: number | null = null,
    threshold: number | null = null,
    no_weight: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Fod2decConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Fod2decOutputs {
    /**
     * Generate FOD-based DEC maps, with optional panchromatic sharpening and/or luminance/perception correction.
     * 
     * By default, the FOD-based DEC is weighted by the integral of the FOD. To weight by another scalar map, use the -contrast option. This option can also be used for panchromatic sharpening, e.g., by supplying a T1 (or other sensible) anatomical volume with a higher spatial resolution.
     * 
     * References:
     * 
     * Dhollander T, Smith RE, Tournier JD, Jeurissen B, Connelly A. Time to move on: an FOD-based DEC map to replace DTI's trademark DEC FA. Proc Intl Soc Mag Reson Med, 2015, 23, 1027
     * 
     * Dhollander T, Raffelt D, Smith RE, Connelly A. Panchromatic sharpening of FOD-based DEC maps by structural T1 information. Proc Intl Soc Mag Reson Med, 2015, 23, 566.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input The input FOD image (spherical harmonic coefficients).
     * @param output The output DEC image (weighted RGB triplets).
     * @param mask Only perform DEC computation within the specified mask image.
     * @param contrast Weight the computed DEC map by the provided image contrast. If the contrast has a different image grid, the DEC map is first resliced and renormalised. To achieve panchromatic sharpening, provide an image with a higher spatial resolution than the input FOD image; e.g., a T1 anatomical volume. Only the DEC is subject to the mask, so as to allow for partial colouring of the contrast image. 
Default when this option is *not* provided: integral of input FOD, subject to the same mask/threshold as used for DEC computation.
     * @param lum Correct for luminance/perception, using default values Cr,Cg,Cb = 0.3,0.5,0.2 and gamma = 2.2 (*not* correcting is the theoretical equivalent of Cr,Cg,Cb = 1,1,1 and gamma = 2).
     * @param lum_coefs The coefficients Cr,Cg,Cb to correct for luminance/perception. 
Note: this implicitly switches on luminance/perception correction, using a default gamma = 2.2 unless specified otherwise.
     * @param lum_gamma The gamma value to correct for luminance/perception. 
Note: this implicitly switches on luminance/perception correction, using a default Cr,Cg,Cb = 0.3,0.5,0.2 unless specified otherwise.
     * @param threshold FOD amplitudes below the threshold value are considered zero.
     * @param no_weight Do not weight the DEC map; just output the unweighted colours. Reslicing and renormalising of colours will still happen when providing the -contrast option as a template.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Fod2decOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FOD2DEC_METADATA);
    const params = fod2dec_params(input, output, mask, contrast, lum, lum_coefs, lum_gamma, threshold, no_weight, info, quiet, debug, force, nthreads, config, help, version)
    return fod2dec_execute(params, execution);
}


export {
      FOD2DEC_METADATA,
      Fod2decConfigParameters,
      Fod2decOutputs,
      Fod2decParameters,
      fod2dec,
      fod2dec_config_params,
      fod2dec_params,
};
