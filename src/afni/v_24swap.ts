// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_24SWAP_METADATA: Metadata = {
    id: "7bff8c87ec5e9d1f68524b27c8cf903189e91f26.boutiques",
    name: "24swap",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V24swapParameters {
    "__STYXTYPE__": "24swap";
    "quiet": boolean;
    "pattern"?: string | null | undefined;
    "input_files": Array<InputPathType>;
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
        "24swap": v_24swap_cargs,
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
 * Output object returned when calling `v_24swap(...)`.
 *
 * @interface
 */
interface V24swapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_24swap_params(
    input_files: Array<InputPathType>,
    quiet: boolean = false,
    pattern: string | null = null,
): V24swapParameters {
    /**
     * Build parameters.
    
     * @param input_files Input file(s) to swap bytes
     * @param quiet Operate quietly
     * @param pattern Pattern that determines the pattern of 2 and 4 byte swaps.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "24swap" as const,
        "quiet": quiet,
        "input_files": input_files,
    };
    if (pattern !== null) {
        params["pattern"] = pattern;
    }
    return params;
}


function v_24swap_cargs(
    params: V24swapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("24swap");
    if ((params["quiet"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["pattern"] ?? null) !== null) {
        cargs.push(
            "-pattern",
            (params["pattern"] ?? null)
        );
    }
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function v_24swap_outputs(
    params: V24swapParameters,
    execution: Execution,
): V24swapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V24swapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_24swap_execute(
    params: V24swapParameters,
    execution: Execution,
): V24swapOutputs {
    /**
     * Swaps bytes pairs and/or quadruples on the files listed.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V24swapOutputs`).
     */
    params = execution.params(params)
    const cargs = v_24swap_cargs(params, execution)
    const ret = v_24swap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_24swap(
    input_files: Array<InputPathType>,
    quiet: boolean = false,
    pattern: string | null = null,
    runner: Runner | null = null,
): V24swapOutputs {
    /**
     * Swaps bytes pairs and/or quadruples on the files listed.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input file(s) to swap bytes
     * @param quiet Operate quietly
     * @param pattern Pattern that determines the pattern of 2 and 4 byte swaps.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V24swapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_24SWAP_METADATA);
    const params = v_24swap_params(input_files, quiet, pattern)
    return v_24swap_execute(params, execution);
}


export {
      V24swapOutputs,
      V24swapParameters,
      V_24SWAP_METADATA,
      v_24swap,
      v_24swap_params,
};
