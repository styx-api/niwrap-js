// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const INIT_USER_DOTFILES_PY_METADATA: Metadata = {
    id: "8d4c58837ffe3486d2bbcb23d32442b108816c2b.boutiques",
    name: "init_user_dotfiles.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface InitUserDotfilesPyParameters {
    "__STYXTYPE__": "init_user_dotfiles.py";
    "help": boolean;
    "help_dotfiles_all": boolean;
    "help_dotfiles_mod": boolean;
    "help_shells": boolean;
    "hist": boolean;
    "show_valid_opts": boolean;
    "ver": boolean;
    "dot_files_list"?: Array<string> | null | undefined;
    "dir_bin"?: string | null | undefined;
    "dir_dot"?: string | null | undefined;
    "do_updates"?: Array<string> | null | undefined;
    "dry_run": boolean;
    "force": boolean;
    "make_backup"?: string | null | undefined;
    "shell_list"?: Array<string> | null | undefined;
    "test": boolean;
    "verbosity_level"?: number | null | undefined;
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
        "init_user_dotfiles.py": init_user_dotfiles_py_cargs,
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
 * Output object returned when calling `init_user_dotfiles_py(...)`.
 *
 * @interface
 */
interface InitUserDotfilesPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function init_user_dotfiles_py_params(
    help: boolean = false,
    help_dotfiles_all: boolean = false,
    help_dotfiles_mod: boolean = false,
    help_shells: boolean = false,
    hist: boolean = false,
    show_valid_opts: boolean = false,
    ver: boolean = false,
    dot_files_list: Array<string> | null = null,
    dir_bin: string | null = null,
    dir_dot: string | null = null,
    do_updates: Array<string> | null = null,
    dry_run: boolean = false,
    force: boolean = false,
    make_backup: string | null = null,
    shell_list: Array<string> | null = null,
    test: boolean = false,
    verbosity_level: number | null = null,
): InitUserDotfilesPyParameters {
    /**
     * Build parameters.
    
     * @param help Show this help
     * @param help_dotfiles_all Display dot files known by the program
     * @param help_dotfiles_mod Display modifiable dot files
     * @param help_shells Display shells known by the program
     * @param hist Show module history
     * @param show_valid_opts List valid options
     * @param ver Show current version
     * @param dot_files_list Specify dot files to focus on (default from -help_dotfiles_mod)
     * @param dir_bin Specify bin directory to add to PATH (default comes from `which afni_proc.py`)
     * @param dir_dot Specify directory containing dot files.
     * @param do_updates Specify which updates to make (default is nothing)
     * @param dry_run Do not modify files, but see what would happen
     * @param force Force edits, whether they seem needed or not
     * @param make_backup Specify whether to make backups of originals (default is yes)
     * @param shell_list Specify shells instead of using -dflist
     * @param test Just test the files for potential changes
     * @param verbosity_level Set the verbosity level (default 1)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "init_user_dotfiles.py" as const,
        "help": help,
        "help_dotfiles_all": help_dotfiles_all,
        "help_dotfiles_mod": help_dotfiles_mod,
        "help_shells": help_shells,
        "hist": hist,
        "show_valid_opts": show_valid_opts,
        "ver": ver,
        "dry_run": dry_run,
        "force": force,
        "test": test,
    };
    if (dot_files_list !== null) {
        params["dot_files_list"] = dot_files_list;
    }
    if (dir_bin !== null) {
        params["dir_bin"] = dir_bin;
    }
    if (dir_dot !== null) {
        params["dir_dot"] = dir_dot;
    }
    if (do_updates !== null) {
        params["do_updates"] = do_updates;
    }
    if (make_backup !== null) {
        params["make_backup"] = make_backup;
    }
    if (shell_list !== null) {
        params["shell_list"] = shell_list;
    }
    if (verbosity_level !== null) {
        params["verbosity_level"] = verbosity_level;
    }
    return params;
}


function init_user_dotfiles_py_cargs(
    params: InitUserDotfilesPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("init_user_dotfiles.py");
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["help_dotfiles_all"] ?? null)) {
        cargs.push("-help_dotfiles_all");
    }
    if ((params["help_dotfiles_mod"] ?? null)) {
        cargs.push("-help_dotfiles_mod");
    }
    if ((params["help_shells"] ?? null)) {
        cargs.push("-help_shells");
    }
    if ((params["hist"] ?? null)) {
        cargs.push("-hist");
    }
    if ((params["show_valid_opts"] ?? null)) {
        cargs.push("-show_valid_opts");
    }
    if ((params["ver"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["dot_files_list"] ?? null) !== null) {
        cargs.push(
            "-dflist",
            ...(params["dot_files_list"] ?? null)
        );
    }
    if ((params["dir_bin"] ?? null) !== null) {
        cargs.push(
            "-dir_bin",
            (params["dir_bin"] ?? null)
        );
    }
    if ((params["dir_dot"] ?? null) !== null) {
        cargs.push(
            "-dir_dot",
            (params["dir_dot"] ?? null)
        );
    }
    if ((params["do_updates"] ?? null) !== null) {
        cargs.push(
            "-do_updates",
            ...(params["do_updates"] ?? null)
        );
    }
    if ((params["dry_run"] ?? null)) {
        cargs.push("-dry_run");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["make_backup"] ?? null) !== null) {
        cargs.push(
            "-make_backup",
            (params["make_backup"] ?? null)
        );
    }
    if ((params["shell_list"] ?? null) !== null) {
        cargs.push(
            "-shell_list",
            ...(params["shell_list"] ?? null)
        );
    }
    if ((params["test"] ?? null)) {
        cargs.push("-test");
    }
    if ((params["verbosity_level"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbosity_level"] ?? null))
        );
    }
    return cargs;
}


function init_user_dotfiles_py_outputs(
    params: InitUserDotfilesPyParameters,
    execution: Execution,
): InitUserDotfilesPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: InitUserDotfilesPyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function init_user_dotfiles_py_execute(
    params: InitUserDotfilesPyParameters,
    execution: Execution,
): InitUserDotfilesPyOutputs {
    /**
     * Initialize or evaluate user dot files (.cshrc, .bashrc, ...) for system settings.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `InitUserDotfilesPyOutputs`).
     */
    params = execution.params(params)
    const cargs = init_user_dotfiles_py_cargs(params, execution)
    const ret = init_user_dotfiles_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function init_user_dotfiles_py(
    help: boolean = false,
    help_dotfiles_all: boolean = false,
    help_dotfiles_mod: boolean = false,
    help_shells: boolean = false,
    hist: boolean = false,
    show_valid_opts: boolean = false,
    ver: boolean = false,
    dot_files_list: Array<string> | null = null,
    dir_bin: string | null = null,
    dir_dot: string | null = null,
    do_updates: Array<string> | null = null,
    dry_run: boolean = false,
    force: boolean = false,
    make_backup: string | null = null,
    shell_list: Array<string> | null = null,
    test: boolean = false,
    verbosity_level: number | null = null,
    runner: Runner | null = null,
): InitUserDotfilesPyOutputs {
    /**
     * Initialize or evaluate user dot files (.cshrc, .bashrc, ...) for system settings.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param help Show this help
     * @param help_dotfiles_all Display dot files known by the program
     * @param help_dotfiles_mod Display modifiable dot files
     * @param help_shells Display shells known by the program
     * @param hist Show module history
     * @param show_valid_opts List valid options
     * @param ver Show current version
     * @param dot_files_list Specify dot files to focus on (default from -help_dotfiles_mod)
     * @param dir_bin Specify bin directory to add to PATH (default comes from `which afni_proc.py`)
     * @param dir_dot Specify directory containing dot files.
     * @param do_updates Specify which updates to make (default is nothing)
     * @param dry_run Do not modify files, but see what would happen
     * @param force Force edits, whether they seem needed or not
     * @param make_backup Specify whether to make backups of originals (default is yes)
     * @param shell_list Specify shells instead of using -dflist
     * @param test Just test the files for potential changes
     * @param verbosity_level Set the verbosity level (default 1)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `InitUserDotfilesPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(INIT_USER_DOTFILES_PY_METADATA);
    const params = init_user_dotfiles_py_params(help, help_dotfiles_all, help_dotfiles_mod, help_shells, hist, show_valid_opts, ver, dot_files_list, dir_bin, dir_dot, do_updates, dry_run, force, make_backup, shell_list, test, verbosity_level)
    return init_user_dotfiles_py_execute(params, execution);
}


export {
      INIT_USER_DOTFILES_PY_METADATA,
      InitUserDotfilesPyOutputs,
      InitUserDotfilesPyParameters,
      init_user_dotfiles_py,
      init_user_dotfiles_py_params,
};
