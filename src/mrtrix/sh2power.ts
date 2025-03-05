// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SH2POWER_METADATA: Metadata = {
    id: "536779908dfe6a15e2ec1a07b45bd1fe2e688ccd.boutiques",
    name: "sh2power",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Sh2powerConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Sh2powerParameters {
    "__STYXTYPE__": "sh2power";
    "spectrum": boolean;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Sh2powerConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "SH": InputPathType;
    "power": string;
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
        "sh2power": sh2power_cargs,
        "config": sh2power_config_cargs,
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
        "sh2power": sh2power_outputs,
    };
    return outputsFuncs[t];
}


function sh2power_config_params(
    key: string,
    value: string,
): Sh2powerConfigParameters {
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


function sh2power_config_cargs(
    params: Sh2powerConfigParameters,
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
 * Output object returned when calling `sh2power(...)`.
 *
 * @interface
 */
interface Sh2powerOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output power image.
     */
    power: OutputPathType;
}


function sh2power_params(
    sh: InputPathType,
    power: string,
    spectrum: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Sh2powerConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Sh2powerParameters {
    /**
     * Build parameters.
    
     * @param sh the input spherical harmonics coefficients image.
     * @param power the output power image.
     * @param spectrum output the power spectrum, i.e., the power contained within each harmonic degree (l=0, 2, 4, ...) as a 4-D image.
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
        "__STYXTYPE__": "sh2power" as const,
        "spectrum": spectrum,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "SH": sh,
        "power": power,
    };
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function sh2power_cargs(
    params: Sh2powerParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("sh2power");
    if ((params["spectrum"] ?? null)) {
        cargs.push("-spectrum");
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
    cargs.push(execution.inputFile((params["SH"] ?? null)));
    cargs.push((params["power"] ?? null));
    return cargs;
}


function sh2power_outputs(
    params: Sh2powerParameters,
    execution: Execution,
): Sh2powerOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Sh2powerOutputs = {
        root: execution.outputFile("."),
        power: execution.outputFile([(params["power"] ?? null)].join('')),
    };
    return ret;
}


function sh2power_execute(
    params: Sh2powerParameters,
    execution: Execution,
): Sh2powerOutputs {
    /**
     * Compute the total power of a spherical harmonics image.
     * 
     * This command computes the sum of squared SH coefficients, which equals the mean-squared amplitude of the spherical function it represents.
     * 
     * The spherical harmonic coefficients are stored according the conventions described the main documentation, which can be found at the following link: 
     * https://mrtrix.readthedocs.io/en/3.0.4/concepts/spherical_harmonics.html
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Sh2powerOutputs`).
     */
    params = execution.params(params)
    const cargs = sh2power_cargs(params, execution)
    const ret = sh2power_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function sh2power(
    sh: InputPathType,
    power: string,
    spectrum: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Sh2powerConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Sh2powerOutputs {
    /**
     * Compute the total power of a spherical harmonics image.
     * 
     * This command computes the sum of squared SH coefficients, which equals the mean-squared amplitude of the spherical function it represents.
     * 
     * The spherical harmonic coefficients are stored according the conventions described the main documentation, which can be found at the following link: 
     * https://mrtrix.readthedocs.io/en/3.0.4/concepts/spherical_harmonics.html
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param sh the input spherical harmonics coefficients image.
     * @param power the output power image.
     * @param spectrum output the power spectrum, i.e., the power contained within each harmonic degree (l=0, 2, 4, ...) as a 4-D image.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Sh2powerOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SH2POWER_METADATA);
    const params = sh2power_params(sh, power, spectrum, info, quiet, debug, force, nthreads, config, help, version)
    return sh2power_execute(params, execution);
}


export {
      SH2POWER_METADATA,
      Sh2powerConfigParameters,
      Sh2powerOutputs,
      Sh2powerParameters,
      sh2power,
      sh2power_config_params,
      sh2power_params,
};
