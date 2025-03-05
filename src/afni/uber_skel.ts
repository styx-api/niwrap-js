// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const UBER_SKEL_METADATA: Metadata = {
    id: "d77a80fc9ecd09ed285b440328c53e4f45eb7735.boutiques",
    name: "uber_skel",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface UberSkelParameters {
    "__STYXTYPE__": "uber_skel";
    "qt_options"?: string | null | undefined;
    "no_gui_flag": boolean;
    "print_script": boolean;
    "save_script"?: string | null | undefined;
    "user_var"?: Array<string> | null | undefined;
    "help_howto_program": boolean;
    "help": boolean;
    "help_gui": boolean;
    "history": boolean;
    "show_valid_opts": boolean;
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
        "uber_skel": uber_skel_cargs,
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
 * Output object returned when calling `uber_skel(...)`.
 *
 * @interface
 */
interface UberSkelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function uber_skel_params(
    qt_options: string | null = null,
    no_gui_flag: boolean = false,
    print_script: boolean = false,
    save_script: string | null = null,
    user_var: Array<string> | null = null,
    help_howto_program: boolean = false,
    help: boolean = false,
    help_gui: boolean = false,
    history: boolean = false,
    show_valid_opts: boolean = false,
    version: boolean = false,
): UberSkelParameters {
    /**
     * Build parameters.
    
     * @param qt_options Pass PyQt4 options directly to the GUI
     * @param no_gui_flag Run without the GUI
     * @param print_script Print the script
     * @param save_script Save the script
     * @param user_var Initialize user variables. Usage: -uvar <name> <value>
     * @param help_howto_program Show programming comments
     * @param help Show help
     * @param help_gui Show help for the GUI
     * @param history Show history
     * @param show_valid_opts Show valid options
     * @param version Show version
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "uber_skel" as const,
        "no_gui_flag": no_gui_flag,
        "print_script": print_script,
        "help_howto_program": help_howto_program,
        "help": help,
        "help_gui": help_gui,
        "history": history,
        "show_valid_opts": show_valid_opts,
        "version": version,
    };
    if (qt_options !== null) {
        params["qt_options"] = qt_options;
    }
    if (save_script !== null) {
        params["save_script"] = save_script;
    }
    if (user_var !== null) {
        params["user_var"] = user_var;
    }
    return params;
}


function uber_skel_cargs(
    params: UberSkelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("uber_skel.py");
    if ((params["qt_options"] ?? null) !== null) {
        cargs.push(
            "-qt_opts",
            (params["qt_options"] ?? null)
        );
    }
    if ((params["no_gui_flag"] ?? null)) {
        cargs.push("-no_gui");
    }
    if ((params["print_script"] ?? null)) {
        cargs.push("-print_script");
    }
    if ((params["save_script"] ?? null) !== null) {
        cargs.push(
            "-save_script",
            (params["save_script"] ?? null)
        );
    }
    if ((params["user_var"] ?? null) !== null) {
        cargs.push(
            "-uvar",
            ...(params["user_var"] ?? null)
        );
    }
    if ((params["help_howto_program"] ?? null)) {
        cargs.push("-help_howto_program");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["help_gui"] ?? null)) {
        cargs.push("-help_gui");
    }
    if ((params["history"] ?? null)) {
        cargs.push("-hist");
    }
    if ((params["show_valid_opts"] ?? null)) {
        cargs.push("-show_valid_opts");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-ver");
    }
    return cargs;
}


function uber_skel_outputs(
    params: UberSkelParameters,
    execution: Execution,
): UberSkelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: UberSkelOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function uber_skel_execute(
    params: UberSkelParameters,
    execution: Execution,
): UberSkelOutputs {
    /**
     * Sample uber processing program for initializing user and control variables, with options for both GUI and non-GUI modes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `UberSkelOutputs`).
     */
    params = execution.params(params)
    const cargs = uber_skel_cargs(params, execution)
    const ret = uber_skel_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function uber_skel(
    qt_options: string | null = null,
    no_gui_flag: boolean = false,
    print_script: boolean = false,
    save_script: string | null = null,
    user_var: Array<string> | null = null,
    help_howto_program: boolean = false,
    help: boolean = false,
    help_gui: boolean = false,
    history: boolean = false,
    show_valid_opts: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): UberSkelOutputs {
    /**
     * Sample uber processing program for initializing user and control variables, with options for both GUI and non-GUI modes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param qt_options Pass PyQt4 options directly to the GUI
     * @param no_gui_flag Run without the GUI
     * @param print_script Print the script
     * @param save_script Save the script
     * @param user_var Initialize user variables. Usage: -uvar <name> <value>
     * @param help_howto_program Show programming comments
     * @param help Show help
     * @param help_gui Show help for the GUI
     * @param history Show history
     * @param show_valid_opts Show valid options
     * @param version Show version
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `UberSkelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(UBER_SKEL_METADATA);
    const params = uber_skel_params(qt_options, no_gui_flag, print_script, save_script, user_var, help_howto_program, help, help_gui, history, show_valid_opts, version)
    return uber_skel_execute(params, execution);
}


export {
      UBER_SKEL_METADATA,
      UberSkelOutputs,
      UberSkelParameters,
      uber_skel,
      uber_skel_params,
};
