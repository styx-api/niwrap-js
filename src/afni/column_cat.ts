// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const COLUMN_CAT_METADATA: Metadata = {
    id: "22f92393a4504948631931c183a528c1437f87dc.boutiques",
    name: "column_cat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ColumnCatParameters {
    "__STYXTYPE__": "column_cat";
    "line_number"?: number | null | undefined;
    "separator_string"?: string | null | undefined;
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
        "column_cat": column_cat_cargs,
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
        "column_cat": column_cat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `column_cat(...)`.
 *
 * @interface
 */
interface ColumnCatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Redirect output of concatenation to a file
     */
    output_file: OutputPathType;
}


function column_cat_params(
    input_files: Array<InputPathType>,
    line_number: number | null = null,
    separator_string: string | null = null,
): ColumnCatParameters {
    /**
     * Build parameters.
    
     * @param input_files Input files to be concatenated
     * @param line_number Print only the specified line number (1-based)
     * @param separator_string Use the specified string as a separator between columns
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "column_cat" as const,
        "input_files": input_files,
    };
    if (line_number !== null) {
        params["line_number"] = line_number;
    }
    if (separator_string !== null) {
        params["separator_string"] = separator_string;
    }
    return params;
}


function column_cat_cargs(
    params: ColumnCatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("column_cat");
    if ((params["line_number"] ?? null) !== null) {
        cargs.push(
            "-line",
            String((params["line_number"] ?? null))
        );
    }
    if ((params["separator_string"] ?? null) !== null) {
        cargs.push(
            "-sep",
            (params["separator_string"] ?? null)
        );
    }
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function column_cat_outputs(
    params: ColumnCatParameters,
    execution: Execution,
): ColumnCatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ColumnCatOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["output_file.txt"].join('')),
    };
    return ret;
}


function column_cat_execute(
    params: ColumnCatParameters,
    execution: Execution,
): ColumnCatOutputs {
    /**
     * Catenate files horizontally. Each line of output is the concatenation of each current line from the input files, all on the same line, separated by a space or a user-defined separator.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ColumnCatOutputs`).
     */
    params = execution.params(params)
    const cargs = column_cat_cargs(params, execution)
    const ret = column_cat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function column_cat(
    input_files: Array<InputPathType>,
    line_number: number | null = null,
    separator_string: string | null = null,
    runner: Runner | null = null,
): ColumnCatOutputs {
    /**
     * Catenate files horizontally. Each line of output is the concatenation of each current line from the input files, all on the same line, separated by a space or a user-defined separator.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input files to be concatenated
     * @param line_number Print only the specified line number (1-based)
     * @param separator_string Use the specified string as a separator between columns
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ColumnCatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(COLUMN_CAT_METADATA);
    const params = column_cat_params(input_files, line_number, separator_string)
    return column_cat_execute(params, execution);
}


export {
      COLUMN_CAT_METADATA,
      ColumnCatOutputs,
      ColumnCatParameters,
      column_cat,
      column_cat_params,
};
