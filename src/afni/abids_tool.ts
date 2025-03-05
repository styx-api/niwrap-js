// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ABIDS_TOOL_METADATA: Metadata = {
    id: "ecdd7e187a3a330cd02d094f809fb0b75a51fe76.boutiques",
    name: "abids_tool",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AbidsToolParameters {
    "__STYXTYPE__": "abids_tool";
    "input_files": Array<InputPathType>;
    "copy_prefix"?: Array<string> | null | undefined;
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
        "abids_tool": abids_tool_cargs,
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
 * Output object returned when calling `abids_tool(...)`.
 *
 * @interface
 */
interface AbidsToolOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function abids_tool_params(
    input_files: Array<InputPathType>,
    copy_prefix: Array<string> | null = null,
): AbidsToolParameters {
    /**
     * Build parameters.
    
     * @param input_files At least one 3d+time dataset in NIFTI format.
     * @param copy_prefix Copy both the NIFTI dataset(s) and matching .json file(s) to PREFIX. Must have the same number of prefixes as datasets.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "abids_tool" as const,
        "input_files": input_files,
    };
    if (copy_prefix !== null) {
        params["copy_prefix"] = copy_prefix;
    }
    return params;
}


function abids_tool_cargs(
    params: AbidsToolParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("abids_tool.py");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    if ((params["copy_prefix"] ?? null) !== null) {
        cargs.push(
            "-copy",
            ...(params["copy_prefix"] ?? null)
        );
    }
    return cargs;
}


function abids_tool_outputs(
    params: AbidsToolParameters,
    execution: Execution,
): AbidsToolOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AbidsToolOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function abids_tool_execute(
    params: AbidsToolParameters,
    execution: Execution,
): AbidsToolOutputs {
    /**
     * A tool to work with BIDS formatted datasets created with dcm2niix_afni or dcm2niix, mainly to pull information from the matching JSON file and refit the input dataset using 3drefit.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AbidsToolOutputs`).
     */
    params = execution.params(params)
    const cargs = abids_tool_cargs(params, execution)
    const ret = abids_tool_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function abids_tool(
    input_files: Array<InputPathType>,
    copy_prefix: Array<string> | null = null,
    runner: Runner | null = null,
): AbidsToolOutputs {
    /**
     * A tool to work with BIDS formatted datasets created with dcm2niix_afni or dcm2niix, mainly to pull information from the matching JSON file and refit the input dataset using 3drefit.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files At least one 3d+time dataset in NIFTI format.
     * @param copy_prefix Copy both the NIFTI dataset(s) and matching .json file(s) to PREFIX. Must have the same number of prefixes as datasets.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AbidsToolOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ABIDS_TOOL_METADATA);
    const params = abids_tool_params(input_files, copy_prefix)
    return abids_tool_execute(params, execution);
}


export {
      ABIDS_TOOL_METADATA,
      AbidsToolOutputs,
      AbidsToolParameters,
      abids_tool,
      abids_tool_params,
};
