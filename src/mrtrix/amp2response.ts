// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const AMP2RESPONSE_METADATA: Metadata = {
    id: "45d8955b40d231d0262470246ab11182cd79fcb5.boutiques",
    name: "amp2response",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Amp2responseConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Amp2responseParameters {
    "__STYXTYPE__": "amp2response";
    "isotropic": boolean;
    "noconstraint": boolean;
    "directions"?: InputPathType | null | undefined;
    "shells"?: Array<number> | null | undefined;
    "lmax"?: Array<number> | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Amp2responseConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "amps": InputPathType;
    "mask": InputPathType;
    "directions_1": InputPathType;
    "response": string;
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
        "amp2response": amp2response_cargs,
        "config": amp2response_config_cargs,
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
        "amp2response": amp2response_outputs,
    };
    return outputsFuncs[t];
}


function amp2response_config_params(
    key: string,
    value: string,
): Amp2responseConfigParameters {
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


function amp2response_config_cargs(
    params: Amp2responseConfigParameters,
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
 * Output object returned when calling `amp2response(...)`.
 *
 * @interface
 */
interface Amp2responseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output zonal spherical harmonic coefficients
     */
    response: OutputPathType;
}


function amp2response_params(
    amps: InputPathType,
    mask: InputPathType,
    directions_1: InputPathType,
    response: string,
    isotropic: boolean = false,
    noconstraint: boolean = false,
    directions: InputPathType | null = null,
    shells: Array<number> | null = null,
    lmax: Array<number> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Amp2responseConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Amp2responseParameters {
    /**
     * Build parameters.
    
     * @param amps the amplitudes image
     * @param mask the mask containing the voxels from which to estimate the response function
     * @param directions_1 a 4D image containing the estimated fibre directions
     * @param response the output zonal spherical harmonic coefficients
     * @param isotropic estimate an isotropic response function (lmax=0 for all shells)
     * @param noconstraint disable the non-negativity and monotonicity constraints
     * @param directions provide an external text file containing the directions along which the amplitudes are sampled
     * @param shells specify one or more b-values to use during processing, as a comma-separated list of the desired approximate b-values (b-values are clustered to allow for small deviations). Note that some commands are incompatible with multiple b-values, and will report an error if more than one b-value is provided. 
WARNING: note that, even though the b=0 volumes are never referred to as shells in the literature, they still have to be explicitly included in the list of b-values as provided to the -shell option! Several algorithms which include the b=0 volumes in their computations may otherwise return an undesired result.
     * @param lmax specify the maximum harmonic degree of the response function to estimate (can be a comma-separated list for multi-shell data)
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
        "__STYXTYPE__": "amp2response" as const,
        "isotropic": isotropic,
        "noconstraint": noconstraint,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "amps": amps,
        "mask": mask,
        "directions_1": directions_1,
        "response": response,
    };
    if (directions !== null) {
        params["directions"] = directions;
    }
    if (shells !== null) {
        params["shells"] = shells;
    }
    if (lmax !== null) {
        params["lmax"] = lmax;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function amp2response_cargs(
    params: Amp2responseParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("amp2response");
    if ((params["isotropic"] ?? null)) {
        cargs.push("-isotropic");
    }
    if ((params["noconstraint"] ?? null)) {
        cargs.push("-noconstraint");
    }
    if ((params["directions"] ?? null) !== null) {
        cargs.push(
            "-directions",
            execution.inputFile((params["directions"] ?? null))
        );
    }
    if ((params["shells"] ?? null) !== null) {
        cargs.push(
            "-shells",
            (params["shells"] ?? null).map(String).join(",")
        );
    }
    if ((params["lmax"] ?? null) !== null) {
        cargs.push(
            "-lmax",
            (params["lmax"] ?? null).map(String).join(",")
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
    cargs.push(execution.inputFile((params["amps"] ?? null)));
    cargs.push(execution.inputFile((params["mask"] ?? null)));
    cargs.push(execution.inputFile((params["directions_1"] ?? null)));
    cargs.push((params["response"] ?? null));
    return cargs;
}


function amp2response_outputs(
    params: Amp2responseParameters,
    execution: Execution,
): Amp2responseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Amp2responseOutputs = {
        root: execution.outputFile("."),
        response: execution.outputFile([(params["response"] ?? null)].join('')),
    };
    return ret;
}


function amp2response_execute(
    params: Amp2responseParameters,
    execution: Execution,
): Amp2responseOutputs {
    /**
     * Estimate response function coefficients based on the DWI signal in single-fibre voxels.
     * 
     * This command uses the image data from all selected single-fibre voxels concurrently, rather than simply averaging their individual spherical harmonic coefficients. It also ensures that the response function is non-negative, and monotonic (i.e. its amplitude must increase from the fibre direction out to the orthogonal plane).
     * 
     * If multi-shell data are provided, and one or more b-value shells are not explicitly requested, the command will generate a response function for every b-value shell (including b=0 if present).
     * 
     * References:
     * 
     * Smith, R. E.; Dhollander, T. & Connelly, A. Constrained linear least squares estimation of anisotropic response function for spherical deconvolution. ISMRM Workshop on Breaking the Barriers of Diffusion MRI, 23.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Amp2responseOutputs`).
     */
    params = execution.params(params)
    const cargs = amp2response_cargs(params, execution)
    const ret = amp2response_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function amp2response(
    amps: InputPathType,
    mask: InputPathType,
    directions_1: InputPathType,
    response: string,
    isotropic: boolean = false,
    noconstraint: boolean = false,
    directions: InputPathType | null = null,
    shells: Array<number> | null = null,
    lmax: Array<number> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Amp2responseConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Amp2responseOutputs {
    /**
     * Estimate response function coefficients based on the DWI signal in single-fibre voxels.
     * 
     * This command uses the image data from all selected single-fibre voxels concurrently, rather than simply averaging their individual spherical harmonic coefficients. It also ensures that the response function is non-negative, and monotonic (i.e. its amplitude must increase from the fibre direction out to the orthogonal plane).
     * 
     * If multi-shell data are provided, and one or more b-value shells are not explicitly requested, the command will generate a response function for every b-value shell (including b=0 if present).
     * 
     * References:
     * 
     * Smith, R. E.; Dhollander, T. & Connelly, A. Constrained linear least squares estimation of anisotropic response function for spherical deconvolution. ISMRM Workshop on Breaking the Barriers of Diffusion MRI, 23.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param amps the amplitudes image
     * @param mask the mask containing the voxels from which to estimate the response function
     * @param directions_1 a 4D image containing the estimated fibre directions
     * @param response the output zonal spherical harmonic coefficients
     * @param isotropic estimate an isotropic response function (lmax=0 for all shells)
     * @param noconstraint disable the non-negativity and monotonicity constraints
     * @param directions provide an external text file containing the directions along which the amplitudes are sampled
     * @param shells specify one or more b-values to use during processing, as a comma-separated list of the desired approximate b-values (b-values are clustered to allow for small deviations). Note that some commands are incompatible with multiple b-values, and will report an error if more than one b-value is provided. 
WARNING: note that, even though the b=0 volumes are never referred to as shells in the literature, they still have to be explicitly included in the list of b-values as provided to the -shell option! Several algorithms which include the b=0 volumes in their computations may otherwise return an undesired result.
     * @param lmax specify the maximum harmonic degree of the response function to estimate (can be a comma-separated list for multi-shell data)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Amp2responseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(AMP2RESPONSE_METADATA);
    const params = amp2response_params(amps, mask, directions_1, response, isotropic, noconstraint, directions, shells, lmax, info, quiet, debug, force, nthreads, config, help, version)
    return amp2response_execute(params, execution);
}


export {
      AMP2RESPONSE_METADATA,
      Amp2responseConfigParameters,
      Amp2responseOutputs,
      Amp2responseParameters,
      amp2response,
      amp2response_config_params,
      amp2response_params,
};
