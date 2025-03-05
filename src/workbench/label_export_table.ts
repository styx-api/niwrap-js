// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL_EXPORT_TABLE_METADATA: Metadata = {
    id: "aa538a6947b1a8c4309745c17b03fe0e989c4686.boutiques",
    name: "label-export-table",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface LabelExportTableParameters {
    "__STYXTYPE__": "label-export-table";
    "label_in": InputPathType;
    "table_out": string;
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
        "label-export-table": label_export_table_cargs,
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
 * Output object returned when calling `label_export_table(...)`.
 *
 * @interface
 */
interface LabelExportTableOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function label_export_table_params(
    label_in: InputPathType,
    table_out: string,
): LabelExportTableParameters {
    /**
     * Build parameters.
    
     * @param label_in the input label file
     * @param table_out output - the output text file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label-export-table" as const,
        "label_in": label_in,
        "table_out": table_out,
    };
    return params;
}


function label_export_table_cargs(
    params: LabelExportTableParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-label-export-table");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    cargs.push((params["table_out"] ?? null));
    return cargs;
}


function label_export_table_outputs(
    params: LabelExportTableParameters,
    execution: Execution,
): LabelExportTableOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LabelExportTableOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function label_export_table_execute(
    params: LabelExportTableParameters,
    execution: Execution,
): LabelExportTableOutputs {
    /**
     * Export label table from gifti as text.
     * 
     * Takes the label table from the gifti label file, and writes it to a text format matching what is expected by -metric-label-import.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LabelExportTableOutputs`).
     */
    params = execution.params(params)
    const cargs = label_export_table_cargs(params, execution)
    const ret = label_export_table_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label_export_table(
    label_in: InputPathType,
    table_out: string,
    runner: Runner | null = null,
): LabelExportTableOutputs {
    /**
     * Export label table from gifti as text.
     * 
     * Takes the label table from the gifti label file, and writes it to a text format matching what is expected by -metric-label-import.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_in the input label file
     * @param table_out output - the output text file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LabelExportTableOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL_EXPORT_TABLE_METADATA);
    const params = label_export_table_params(label_in, table_out)
    return label_export_table_execute(params, execution);
}


export {
      LABEL_EXPORT_TABLE_METADATA,
      LabelExportTableOutputs,
      LabelExportTableParameters,
      label_export_table,
      label_export_table_params,
};
