// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CHECK_MCR_SH_METADATA: Metadata = {
    id: "3cf223c7fdc62b166c1577a94bc2b4f19d6881da.boutiques",
    name: "checkMCR.sh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface CheckMcrShParameters {
    "__STYXTYPE__": "checkMCR.sh";
    "help": boolean;
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
        "checkMCR.sh": check_mcr_sh_cargs,
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
 * Output object returned when calling `check_mcr_sh(...)`.
 *
 * @interface
 */
interface CheckMcrShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function check_mcr_sh_params(
    help: boolean = false,
): CheckMcrShParameters {
    /**
     * Build parameters.
    
     * @param help Display help information about checkMCR.sh
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "checkMCR.sh" as const,
        "help": help,
    };
    return params;
}


function check_mcr_sh_cargs(
    params: CheckMcrShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("checkMCR.sh");
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function check_mcr_sh_outputs(
    params: CheckMcrShParameters,
    execution: Execution,
): CheckMcrShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CheckMcrShOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function check_mcr_sh_execute(
    params: CheckMcrShParameters,
    execution: Execution,
): CheckMcrShOutputs {
    /**
     * Script to check for the presence of Matlab Compiler Runtime (MCR) for Matlab 2019b, used for the hippocampal/amygdala and brainstem modules.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CheckMcrShOutputs`).
     */
    params = execution.params(params)
    const cargs = check_mcr_sh_cargs(params, execution)
    const ret = check_mcr_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function check_mcr_sh(
    help: boolean = false,
    runner: Runner | null = null,
): CheckMcrShOutputs {
    /**
     * Script to check for the presence of Matlab Compiler Runtime (MCR) for Matlab 2019b, used for the hippocampal/amygdala and brainstem modules.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param help Display help information about checkMCR.sh
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CheckMcrShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CHECK_MCR_SH_METADATA);
    const params = check_mcr_sh_params(help)
    return check_mcr_sh_execute(params, execution);
}


export {
      CHECK_MCR_SH_METADATA,
      CheckMcrShOutputs,
      CheckMcrShParameters,
      check_mcr_sh,
      check_mcr_sh_params,
};
