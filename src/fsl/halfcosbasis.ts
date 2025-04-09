// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HALFCOSBASIS_METADATA: Metadata = {
    id: "640a5e6ac19a0af58d05c69c3337d339e9244a98.boutiques",
    name: "halfcosbasis",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface HalfcosbasisParameters {
    "__STYXTYPE__": "halfcosbasis";
    "hrf_param_file": InputPathType;
    "hrf_param_file_hf": InputPathType;
    "verbose_flag": boolean;
    "debug_level"?: number | null | undefined;
    "debug_level_debug"?: number | null | undefined;
    "debug_level_debuglevel"?: number | null | undefined;
    "timing_on_flag": boolean;
    "log_dir"?: string | null | undefined;
    "log_dir_ld"?: string | null | undefined;
    "log_dir_logdir"?: string | null | undefined;
    "num_hrf_samples"?: number | null | undefined;
    "num_hrf_basis_funcs"?: number | null | undefined;
    "num_secs"?: number | null | undefined;
    "num_secs_nsecs"?: number | null | undefined;
    "temp_res"?: number | null | undefined;
    "help_flag": boolean;
    "help_flag_long": boolean;
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
        "halfcosbasis": halfcosbasis_cargs,
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
 * Output object returned when calling `halfcosbasis(...)`.
 *
 * @interface
 */
interface HalfcosbasisOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function halfcosbasis_params(
    hrf_param_file: InputPathType,
    hrf_param_file_hf: InputPathType,
    verbose_flag: boolean = false,
    debug_level: number | null = null,
    debug_level_debug: number | null = null,
    debug_level_debuglevel: number | null = null,
    timing_on_flag: boolean = false,
    log_dir: string | null = null,
    log_dir_ld: string | null = null,
    log_dir_logdir: string | null = null,
    num_hrf_samples: number | null = 1000,
    num_hrf_basis_funcs: number | null = 3,
    num_secs: number | null = 40,
    num_secs_nsecs: number | null = 40,
    temp_res: number | null = 0.05,
    help_flag: boolean = false,
    help_flag_long: boolean = false,
): HalfcosbasisParameters {
    /**
     * Build parameters.
    
     * @param hrf_param_file Half cosine HRF parameter ranges file
     * @param hrf_param_file_hf Half cosine HRF parameter ranges file
     * @param verbose_flag Switch on diagnostic messages
     * @param debug_level Set debug level
     * @param debug_level_debug Set debug level
     * @param debug_level_debuglevel Set debug level
     * @param timing_on_flag Turn timing on
     * @param log_dir Log directory
     * @param log_dir_ld Log directory
     * @param log_dir_logdir Log directory
     * @param num_hrf_samples Number of HRF samples to use (default is 1000)
     * @param num_hrf_basis_funcs Number of HRF basis functions to use (default is 3)
     * @param num_secs Number of seconds (default is 40)
     * @param num_secs_nsecs Number of seconds (default is 40)
     * @param temp_res Temporal resolution (default is 0.05)
     * @param help_flag Display help message
     * @param help_flag_long Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "halfcosbasis" as const,
        "hrf_param_file": hrf_param_file,
        "hrf_param_file_hf": hrf_param_file_hf,
        "verbose_flag": verbose_flag,
        "timing_on_flag": timing_on_flag,
        "help_flag": help_flag,
        "help_flag_long": help_flag_long,
    };
    if (debug_level !== null) {
        params["debug_level"] = debug_level;
    }
    if (debug_level_debug !== null) {
        params["debug_level_debug"] = debug_level_debug;
    }
    if (debug_level_debuglevel !== null) {
        params["debug_level_debuglevel"] = debug_level_debuglevel;
    }
    if (log_dir !== null) {
        params["log_dir"] = log_dir;
    }
    if (log_dir_ld !== null) {
        params["log_dir_ld"] = log_dir_ld;
    }
    if (log_dir_logdir !== null) {
        params["log_dir_logdir"] = log_dir_logdir;
    }
    if (num_hrf_samples !== null) {
        params["num_hrf_samples"] = num_hrf_samples;
    }
    if (num_hrf_basis_funcs !== null) {
        params["num_hrf_basis_funcs"] = num_hrf_basis_funcs;
    }
    if (num_secs !== null) {
        params["num_secs"] = num_secs;
    }
    if (num_secs_nsecs !== null) {
        params["num_secs_nsecs"] = num_secs_nsecs;
    }
    if (temp_res !== null) {
        params["temp_res"] = temp_res;
    }
    return params;
}


function halfcosbasis_cargs(
    params: HalfcosbasisParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("halfcosbasis");
    cargs.push(
        "--hcprf",
        execution.inputFile((params["hrf_param_file"] ?? null))
    );
    cargs.push(
        "--hf",
        execution.inputFile((params["hrf_param_file_hf"] ?? null))
    );
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["debug_level"] ?? null) !== null) {
        cargs.push(
            "--db",
            String((params["debug_level"] ?? null))
        );
    }
    if ((params["debug_level_debug"] ?? null) !== null) {
        cargs.push(
            "--debug",
            String((params["debug_level_debug"] ?? null))
        );
    }
    if ((params["debug_level_debuglevel"] ?? null) !== null) {
        cargs.push(
            "--debuglevel",
            String((params["debug_level_debuglevel"] ?? null))
        );
    }
    if ((params["timing_on_flag"] ?? null)) {
        cargs.push("--to");
    }
    if ((params["log_dir"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["log_dir"] ?? null)
        );
    }
    if ((params["log_dir_ld"] ?? null) !== null) {
        cargs.push(
            "--ld",
            (params["log_dir_ld"] ?? null)
        );
    }
    if ((params["log_dir_logdir"] ?? null) !== null) {
        cargs.push(
            "--logdir",
            (params["log_dir_logdir"] ?? null)
        );
    }
    if ((params["num_hrf_samples"] ?? null) !== null) {
        cargs.push(
            "--nhs",
            String((params["num_hrf_samples"] ?? null))
        );
    }
    if ((params["num_hrf_basis_funcs"] ?? null) !== null) {
        cargs.push(
            "--nbfs",
            String((params["num_hrf_basis_funcs"] ?? null))
        );
    }
    if ((params["num_secs"] ?? null) !== null) {
        cargs.push(
            "--ns",
            String((params["num_secs"] ?? null))
        );
    }
    if ((params["num_secs_nsecs"] ?? null) !== null) {
        cargs.push(
            "--nsecs",
            String((params["num_secs_nsecs"] ?? null))
        );
    }
    if ((params["temp_res"] ?? null) !== null) {
        cargs.push(
            "--res",
            String((params["temp_res"] ?? null))
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["help_flag_long"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function halfcosbasis_outputs(
    params: HalfcosbasisParameters,
    execution: Execution,
): HalfcosbasisOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HalfcosbasisOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function halfcosbasis_execute(
    params: HalfcosbasisParameters,
    execution: Execution,
): HalfcosbasisOutputs {
    /**
     * Tool for handling half-cosine basis functions in FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HalfcosbasisOutputs`).
     */
    params = execution.params(params)
    const cargs = halfcosbasis_cargs(params, execution)
    const ret = halfcosbasis_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function halfcosbasis(
    hrf_param_file: InputPathType,
    hrf_param_file_hf: InputPathType,
    verbose_flag: boolean = false,
    debug_level: number | null = null,
    debug_level_debug: number | null = null,
    debug_level_debuglevel: number | null = null,
    timing_on_flag: boolean = false,
    log_dir: string | null = null,
    log_dir_ld: string | null = null,
    log_dir_logdir: string | null = null,
    num_hrf_samples: number | null = 1000,
    num_hrf_basis_funcs: number | null = 3,
    num_secs: number | null = 40,
    num_secs_nsecs: number | null = 40,
    temp_res: number | null = 0.05,
    help_flag: boolean = false,
    help_flag_long: boolean = false,
    runner: Runner | null = null,
): HalfcosbasisOutputs {
    /**
     * Tool for handling half-cosine basis functions in FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param hrf_param_file Half cosine HRF parameter ranges file
     * @param hrf_param_file_hf Half cosine HRF parameter ranges file
     * @param verbose_flag Switch on diagnostic messages
     * @param debug_level Set debug level
     * @param debug_level_debug Set debug level
     * @param debug_level_debuglevel Set debug level
     * @param timing_on_flag Turn timing on
     * @param log_dir Log directory
     * @param log_dir_ld Log directory
     * @param log_dir_logdir Log directory
     * @param num_hrf_samples Number of HRF samples to use (default is 1000)
     * @param num_hrf_basis_funcs Number of HRF basis functions to use (default is 3)
     * @param num_secs Number of seconds (default is 40)
     * @param num_secs_nsecs Number of seconds (default is 40)
     * @param temp_res Temporal resolution (default is 0.05)
     * @param help_flag Display help message
     * @param help_flag_long Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HalfcosbasisOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HALFCOSBASIS_METADATA);
    const params = halfcosbasis_params(hrf_param_file, hrf_param_file_hf, verbose_flag, debug_level, debug_level_debug, debug_level_debuglevel, timing_on_flag, log_dir, log_dir_ld, log_dir_logdir, num_hrf_samples, num_hrf_basis_funcs, num_secs, num_secs_nsecs, temp_res, help_flag, help_flag_long)
    return halfcosbasis_execute(params, execution);
}


export {
      HALFCOSBASIS_METADATA,
      HalfcosbasisOutputs,
      HalfcosbasisParameters,
      halfcosbasis,
      halfcosbasis_params,
};
