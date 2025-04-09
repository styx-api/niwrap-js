// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__UPDATE_AFNI_BINARIES_METADATA: Metadata = {
    id: "e0b835db0cb53555b172344e21f8897821de7ba7.boutiques",
    name: "@update.afni.binaries",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VUpdateAfniBinariesParameters {
    "__STYXTYPE__": "@update.afni.binaries";
    "defaults_flag": boolean;
    "help_flag": boolean;
    "help_sys_progs_flag": boolean;
    "apsearch"?: string | null | undefined;
    "bindir"?: string | null | undefined;
    "curl_flag": boolean;
    "do_dotfiles_flag": boolean;
    "do_extras_flag": boolean;
    "echo_flag": boolean;
    "make_backup"?: string | null | undefined;
    "no_cert_verify_flag": boolean;
    "no_recur_flag": boolean;
    "proto"?: string | null | undefined;
    "quick_flag": boolean;
    "show_obsoletes_flag": boolean;
    "show_obsoletes_grep_flag": boolean;
    "show_system_progs_flag": boolean;
    "sys_ok_flag": boolean;
    "test_flag": boolean;
    "test_protos_flag": boolean;
    "revert_flag": boolean;
    "local_package"?: string | null | undefined;
    "prog_list"?: Array<string> | null | undefined;
    "package"?: string | null | undefined;
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
        "@update.afni.binaries": v__update_afni_binaries_cargs,
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
 * Output object returned when calling `v__update_afni_binaries(...)`.
 *
 * @interface
 */
interface VUpdateAfniBinariesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__update_afni_binaries_params(
    defaults_flag: boolean = false,
    help_flag: boolean = false,
    help_sys_progs_flag: boolean = false,
    apsearch: string | null = null,
    bindir: string | null = null,
    curl_flag: boolean = false,
    do_dotfiles_flag: boolean = false,
    do_extras_flag: boolean = false,
    echo_flag: boolean = false,
    make_backup: string | null = null,
    no_cert_verify_flag: boolean = false,
    no_recur_flag: boolean = false,
    proto: string | null = null,
    quick_flag: boolean = false,
    show_obsoletes_flag: boolean = false,
    show_obsoletes_grep_flag: boolean = false,
    show_system_progs_flag: boolean = false,
    sys_ok_flag: boolean = false,
    test_flag: boolean = false,
    test_protos_flag: boolean = false,
    revert_flag: boolean = false,
    local_package: string | null = null,
    prog_list: Array<string> | null = null,
    package_: string | null = null,
): VUpdateAfniBinariesParameters {
    /**
     * Build parameters.
    
     * @param defaults_flag Install current package into abin.
     * @param help_flag Show this help.
     * @param help_sys_progs_flag List system programs that block update.
     * @param apsearch Specify getting apsearch updates.
     * @param bindir Set AFNI binary directory to ABIN.
     * @param curl_flag Default to curl instead of wget.
     * @param do_dotfiles_flag Try to initialize dot files if needed.
     * @param do_extras_flag Do extra niceties (beyond simple install).
     * @param echo_flag Turn on shell command echo.
     * @param make_backup Make a backup of binaries before replacing.
     * @param no_cert_verify_flag Do not verify the server CA certificate.
     * @param no_recur_flag Do not download and run new @uab script.
     * @param proto Access afni host via specified PROTOCOL.
     * @param quick_flag Quick mode, no fancies.
     * @param show_obsoletes_flag List any obsolete packages.
     * @param show_obsoletes_grep_flag List any obsolete packages (easy to grep).
     * @param show_system_progs_flag Show system programs that do not belong in abin.
     * @param sys_ok_flag OK to update, even if system progs found.
     * @param test_flag Just attempt the download and quit.
     * @param test_protos_flag Test download protocols and exit.
     * @param revert_flag Revert binaries to previous version.
     * @param local_package Install local PACKAGE.tgz package.
     * @param prog_list Install given programs, not whole PACKAGE.
     * @param package_ Install distribution package PACKAGE.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@update.afni.binaries" as const,
        "defaults_flag": defaults_flag,
        "help_flag": help_flag,
        "help_sys_progs_flag": help_sys_progs_flag,
        "curl_flag": curl_flag,
        "do_dotfiles_flag": do_dotfiles_flag,
        "do_extras_flag": do_extras_flag,
        "echo_flag": echo_flag,
        "no_cert_verify_flag": no_cert_verify_flag,
        "no_recur_flag": no_recur_flag,
        "quick_flag": quick_flag,
        "show_obsoletes_flag": show_obsoletes_flag,
        "show_obsoletes_grep_flag": show_obsoletes_grep_flag,
        "show_system_progs_flag": show_system_progs_flag,
        "sys_ok_flag": sys_ok_flag,
        "test_flag": test_flag,
        "test_protos_flag": test_protos_flag,
        "revert_flag": revert_flag,
    };
    if (apsearch !== null) {
        params["apsearch"] = apsearch;
    }
    if (bindir !== null) {
        params["bindir"] = bindir;
    }
    if (make_backup !== null) {
        params["make_backup"] = make_backup;
    }
    if (proto !== null) {
        params["proto"] = proto;
    }
    if (local_package !== null) {
        params["local_package"] = local_package;
    }
    if (prog_list !== null) {
        params["prog_list"] = prog_list;
    }
    if (package_ !== null) {
        params["package"] = package_;
    }
    return params;
}


function v__update_afni_binaries_cargs(
    params: VUpdateAfniBinariesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@update.afni.binaries");
    if ((params["defaults_flag"] ?? null)) {
        cargs.push("-defaults");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["help_sys_progs_flag"] ?? null)) {
        cargs.push("-help_sys_progs");
    }
    if ((params["apsearch"] ?? null) !== null) {
        cargs.push(
            "-apsearch",
            (params["apsearch"] ?? null)
        );
    }
    if ((params["bindir"] ?? null) !== null) {
        cargs.push(
            "-bindir",
            (params["bindir"] ?? null)
        );
    }
    if ((params["curl_flag"] ?? null)) {
        cargs.push("-curl");
    }
    if ((params["do_dotfiles_flag"] ?? null)) {
        cargs.push("-do_dotfiles");
    }
    if ((params["do_extras_flag"] ?? null)) {
        cargs.push("-do_extras");
    }
    if ((params["echo_flag"] ?? null)) {
        cargs.push("-echo");
    }
    if ((params["make_backup"] ?? null) !== null) {
        cargs.push(
            "-make_backup",
            (params["make_backup"] ?? null)
        );
    }
    if ((params["no_cert_verify_flag"] ?? null)) {
        cargs.push("-no_cert_verify");
    }
    if ((params["no_recur_flag"] ?? null)) {
        cargs.push("-no_recur");
    }
    if ((params["proto"] ?? null) !== null) {
        cargs.push(
            "-proto",
            (params["proto"] ?? null)
        );
    }
    if ((params["quick_flag"] ?? null)) {
        cargs.push("-quick");
    }
    if ((params["show_obsoletes_flag"] ?? null)) {
        cargs.push("-show_obsoletes");
    }
    if ((params["show_obsoletes_grep_flag"] ?? null)) {
        cargs.push("-show_obsoletes_grep");
    }
    if ((params["show_system_progs_flag"] ?? null)) {
        cargs.push("-show_system_progs");
    }
    if ((params["sys_ok_flag"] ?? null)) {
        cargs.push("-sys_ok");
    }
    if ((params["test_flag"] ?? null)) {
        cargs.push("-test");
    }
    if ((params["test_protos_flag"] ?? null)) {
        cargs.push("-test_protos");
    }
    if ((params["revert_flag"] ?? null)) {
        cargs.push("-revert");
    }
    if ((params["local_package"] ?? null) !== null) {
        cargs.push(
            "-local_package",
            (params["local_package"] ?? null)
        );
    }
    if ((params["prog_list"] ?? null) !== null) {
        cargs.push(
            "-prog_list",
            ...(params["prog_list"] ?? null)
        );
    }
    if ((params["package"] ?? null) !== null) {
        cargs.push(
            "-package",
            (params["package"] ?? null)
        );
    }
    return cargs;
}


function v__update_afni_binaries_outputs(
    params: VUpdateAfniBinariesParameters,
    execution: Execution,
): VUpdateAfniBinariesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VUpdateAfniBinariesOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__update_afni_binaries_execute(
    params: VUpdateAfniBinariesParameters,
    execution: Execution,
): VUpdateAfniBinariesOutputs {
    /**
     * Install or update AFNI binaries.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VUpdateAfniBinariesOutputs`).
     */
    params = execution.params(params)
    const cargs = v__update_afni_binaries_cargs(params, execution)
    const ret = v__update_afni_binaries_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__update_afni_binaries(
    defaults_flag: boolean = false,
    help_flag: boolean = false,
    help_sys_progs_flag: boolean = false,
    apsearch: string | null = null,
    bindir: string | null = null,
    curl_flag: boolean = false,
    do_dotfiles_flag: boolean = false,
    do_extras_flag: boolean = false,
    echo_flag: boolean = false,
    make_backup: string | null = null,
    no_cert_verify_flag: boolean = false,
    no_recur_flag: boolean = false,
    proto: string | null = null,
    quick_flag: boolean = false,
    show_obsoletes_flag: boolean = false,
    show_obsoletes_grep_flag: boolean = false,
    show_system_progs_flag: boolean = false,
    sys_ok_flag: boolean = false,
    test_flag: boolean = false,
    test_protos_flag: boolean = false,
    revert_flag: boolean = false,
    local_package: string | null = null,
    prog_list: Array<string> | null = null,
    package_: string | null = null,
    runner: Runner | null = null,
): VUpdateAfniBinariesOutputs {
    /**
     * Install or update AFNI binaries.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param defaults_flag Install current package into abin.
     * @param help_flag Show this help.
     * @param help_sys_progs_flag List system programs that block update.
     * @param apsearch Specify getting apsearch updates.
     * @param bindir Set AFNI binary directory to ABIN.
     * @param curl_flag Default to curl instead of wget.
     * @param do_dotfiles_flag Try to initialize dot files if needed.
     * @param do_extras_flag Do extra niceties (beyond simple install).
     * @param echo_flag Turn on shell command echo.
     * @param make_backup Make a backup of binaries before replacing.
     * @param no_cert_verify_flag Do not verify the server CA certificate.
     * @param no_recur_flag Do not download and run new @uab script.
     * @param proto Access afni host via specified PROTOCOL.
     * @param quick_flag Quick mode, no fancies.
     * @param show_obsoletes_flag List any obsolete packages.
     * @param show_obsoletes_grep_flag List any obsolete packages (easy to grep).
     * @param show_system_progs_flag Show system programs that do not belong in abin.
     * @param sys_ok_flag OK to update, even if system progs found.
     * @param test_flag Just attempt the download and quit.
     * @param test_protos_flag Test download protocols and exit.
     * @param revert_flag Revert binaries to previous version.
     * @param local_package Install local PACKAGE.tgz package.
     * @param prog_list Install given programs, not whole PACKAGE.
     * @param package_ Install distribution package PACKAGE.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VUpdateAfniBinariesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__UPDATE_AFNI_BINARIES_METADATA);
    const params = v__update_afni_binaries_params(defaults_flag, help_flag, help_sys_progs_flag, apsearch, bindir, curl_flag, do_dotfiles_flag, do_extras_flag, echo_flag, make_backup, no_cert_verify_flag, no_recur_flag, proto, quick_flag, show_obsoletes_flag, show_obsoletes_grep_flag, show_system_progs_flag, sys_ok_flag, test_flag, test_protos_flag, revert_flag, local_package, prog_list, package_)
    return v__update_afni_binaries_execute(params, execution);
}


export {
      VUpdateAfniBinariesOutputs,
      VUpdateAfniBinariesParameters,
      V__UPDATE_AFNI_BINARIES_METADATA,
      v__update_afni_binaries,
      v__update_afni_binaries_params,
};
