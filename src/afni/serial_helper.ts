// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SERIAL_HELPER_METADATA: Metadata = {
    id: "4df7ea7f38a6767c1aba72a89599b9e5c022108c.boutiques",
    name: "serial_helper",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SerialHelperParameters {
    "__STYXTYPE__": "serial_helper";
    "serial_port": string;
    "sock_num"?: number | null | undefined;
    "mp_max"?: number | null | undefined;
    "mp_min"?: number | null | undefined;
    "num_extra"?: number | null | undefined;
    "disp_all"?: number | null | undefined;
    "debug"?: number | null | undefined;
    "show_times": boolean;
    "help": boolean;
    "hist": boolean;
    "no_serial": boolean;
    "version": boolean;
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
        "serial_helper": serial_helper_cargs,
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
 * Output object returned when calling `serial_helper(...)`.
 *
 * @interface
 */
interface SerialHelperOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function serial_helper_params(
    serial_port: string,
    sock_num: number | null = null,
    mp_max: number | null = null,
    mp_min: number | null = null,
    num_extra: number | null = null,
    disp_all: number | null = null,
    debug: number | null = null,
    show_times: boolean = false,
    help: boolean = false,
    hist: boolean = false,
    no_serial: boolean = false,
    version: boolean = false,
): SerialHelperParameters {
    /**
     * Build parameters.
    
     * @param serial_port Output serial port filename
     * @param sock_num Specify socket number to serve
     * @param mp_max Limit the maximum value of the MP data
     * @param mp_min Limit the minimum value of the MP data
     * @param num_extra Receive additional floats per TR
     * @param disp_all Receive NVOX*8 extra floats per TR
     * @param debug Set the debugging level (0-3)
     * @param show_times Show communication times
     * @param help Display this help information
     * @param hist Show the module history
     * @param no_serial Turn off serial port output
     * @param version Show the current version number
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "serial_helper" as const,
        "serial_port": serial_port,
        "show_times": show_times,
        "help": help,
        "hist": hist,
        "no_serial": no_serial,
        "version": version,
    };
    if (sock_num !== null) {
        params["sock_num"] = sock_num;
    }
    if (mp_max !== null) {
        params["mp_max"] = mp_max;
    }
    if (mp_min !== null) {
        params["mp_min"] = mp_min;
    }
    if (num_extra !== null) {
        params["num_extra"] = num_extra;
    }
    if (disp_all !== null) {
        params["disp_all"] = disp_all;
    }
    if (debug !== null) {
        params["debug"] = debug;
    }
    return params;
}


function serial_helper_cargs(
    params: SerialHelperParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("serial_helper");
    cargs.push(
        "-serial_port",
        (params["serial_port"] ?? null)
    );
    if ((params["sock_num"] ?? null) !== null) {
        cargs.push(
            "-sock_num",
            String((params["sock_num"] ?? null))
        );
    }
    if ((params["mp_max"] ?? null) !== null) {
        cargs.push(
            "-mp_max",
            String((params["mp_max"] ?? null))
        );
    }
    if ((params["mp_min"] ?? null) !== null) {
        cargs.push(
            "-mp_min",
            String((params["mp_min"] ?? null))
        );
    }
    if ((params["num_extra"] ?? null) !== null) {
        cargs.push(
            "-num_extra",
            String((params["num_extra"] ?? null))
        );
    }
    if ((params["disp_all"] ?? null) !== null) {
        cargs.push(
            "-disp_all",
            String((params["disp_all"] ?? null))
        );
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    if ((params["show_times"] ?? null)) {
        cargs.push("-show_times");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["hist"] ?? null)) {
        cargs.push("-hist");
    }
    if ((params["no_serial"] ?? null)) {
        cargs.push("-no_serial");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    return cargs;
}


function serial_helper_outputs(
    params: SerialHelperParameters,
    execution: Execution,
): SerialHelperOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SerialHelperOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function serial_helper_execute(
    params: SerialHelperParameters,
    execution: Execution,
): SerialHelperOutputs {
    /**
     * Passes motion parameters from socket to serial port.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SerialHelperOutputs`).
     */
    params = execution.params(params)
    const cargs = serial_helper_cargs(params, execution)
    const ret = serial_helper_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function serial_helper(
    serial_port: string,
    sock_num: number | null = null,
    mp_max: number | null = null,
    mp_min: number | null = null,
    num_extra: number | null = null,
    disp_all: number | null = null,
    debug: number | null = null,
    show_times: boolean = false,
    help: boolean = false,
    hist: boolean = false,
    no_serial: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): SerialHelperOutputs {
    /**
     * Passes motion parameters from socket to serial port.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param serial_port Output serial port filename
     * @param sock_num Specify socket number to serve
     * @param mp_max Limit the maximum value of the MP data
     * @param mp_min Limit the minimum value of the MP data
     * @param num_extra Receive additional floats per TR
     * @param disp_all Receive NVOX*8 extra floats per TR
     * @param debug Set the debugging level (0-3)
     * @param show_times Show communication times
     * @param help Display this help information
     * @param hist Show the module history
     * @param no_serial Turn off serial port output
     * @param version Show the current version number
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SerialHelperOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SERIAL_HELPER_METADATA);
    const params = serial_helper_params(serial_port, sock_num, mp_max, mp_min, num_extra, disp_all, debug, show_times, help, hist, no_serial, version)
    return serial_helper_execute(params, execution);
}


export {
      SERIAL_HELPER_METADATA,
      SerialHelperOutputs,
      SerialHelperParameters,
      serial_helper,
      serial_helper_params,
};
