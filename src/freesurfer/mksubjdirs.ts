// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MKSUBJDIRS_METADATA: Metadata = {
    id: "19b08b172da5b6336a32dd0488cf331beb47bbc0.boutiques",
    name: "mksubjdirs",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MksubjdirsParameters {
    "__STYXTYPE__": "mksubjdirs";
    "subj_name": string;
    "mode"?: string | null | undefined;
    "parents": boolean;
    "verbose": boolean;
    "selinux_context": boolean;
    "help": boolean;
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
        "mksubjdirs": mksubjdirs_cargs,
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
 * Output object returned when calling `mksubjdirs(...)`.
 *
 * @interface
 */
interface MksubjdirsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mksubjdirs_params(
    subj_name: string,
    mode: string | null = null,
    parents: boolean = false,
    verbose: boolean = false,
    selinux_context: boolean = false,
    help: boolean = false,
    version: boolean = false,
): MksubjdirsParameters {
    /**
     * Build parameters.
    
     * @param subj_name Name of the subject directory to create.
     * @param mode Set file mode (as in chmod), not a=rwx - umask
     * @param parents No error if existing, make parent directories as needed
     * @param verbose Print a message for each created directory
     * @param selinux_context Set SELinux security context of each created directory to the default type
     * @param help Display help and exit
     * @param version Output version information and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mksubjdirs" as const,
        "subj_name": subj_name,
        "parents": parents,
        "verbose": verbose,
        "selinux_context": selinux_context,
        "help": help,
        "version": version,
    };
    if (mode !== null) {
        params["mode"] = mode;
    }
    return params;
}


function mksubjdirs_cargs(
    params: MksubjdirsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mksubjdirs");
    cargs.push((params["subj_name"] ?? null));
    if ((params["mode"] ?? null) !== null) {
        cargs.push(
            "-m",
            (params["mode"] ?? null)
        );
    }
    if ((params["parents"] ?? null)) {
        cargs.push("-p");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["selinux_context"] ?? null)) {
        cargs.push("-Z");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mksubjdirs_outputs(
    params: MksubjdirsParameters,
    execution: Execution,
): MksubjdirsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MksubjdirsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mksubjdirs_execute(
    params: MksubjdirsParameters,
    execution: Execution,
): MksubjdirsOutputs {
    /**
     * A command-line tool to create subject directories.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MksubjdirsOutputs`).
     */
    params = execution.params(params)
    const cargs = mksubjdirs_cargs(params, execution)
    const ret = mksubjdirs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mksubjdirs(
    subj_name: string,
    mode: string | null = null,
    parents: boolean = false,
    verbose: boolean = false,
    selinux_context: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MksubjdirsOutputs {
    /**
     * A command-line tool to create subject directories.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subj_name Name of the subject directory to create.
     * @param mode Set file mode (as in chmod), not a=rwx - umask
     * @param parents No error if existing, make parent directories as needed
     * @param verbose Print a message for each created directory
     * @param selinux_context Set SELinux security context of each created directory to the default type
     * @param help Display help and exit
     * @param version Output version information and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MksubjdirsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MKSUBJDIRS_METADATA);
    const params = mksubjdirs_params(subj_name, mode, parents, verbose, selinux_context, help, version)
    return mksubjdirs_execute(params, execution);
}


export {
      MKSUBJDIRS_METADATA,
      MksubjdirsOutputs,
      MksubjdirsParameters,
      mksubjdirs,
      mksubjdirs_params,
};
