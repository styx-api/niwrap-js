// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_LABEL_IMPORT_METADATA: Metadata = {
    id: "6da1f2a3d32c8f47c15c52c268b4fb47c77b1020.boutiques",
    name: "metric-label-import",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricLabelImportParameters {
    "__STYXTYPE__": "metric-label-import";
    "input": InputPathType;
    "label_list_file": string;
    "output": string;
    "opt_discard_others": boolean;
    "opt_unlabeled_value_value"?: number | null | undefined;
    "opt_column_column"?: string | null | undefined;
    "opt_drop_unused_labels": boolean;
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
        "metric-label-import": metric_label_import_cargs,
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
        "metric-label-import": metric_label_import_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `metric_label_import(...)`.
 *
 * @interface
 */
interface MetricLabelImportOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output gifti label file
     */
    output: OutputPathType;
}


function metric_label_import_params(
    input: InputPathType,
    label_list_file: string,
    output: string,
    opt_discard_others: boolean = false,
    opt_unlabeled_value_value: number | null = null,
    opt_column_column: string | null = null,
    opt_drop_unused_labels: boolean = false,
): MetricLabelImportParameters {
    /**
     * Build parameters.
    
     * @param input the input metric file
     * @param label_list_file text file containing the values and names for labels
     * @param output the output gifti label file
     * @param opt_discard_others set any values not mentioned in the label list to the ??? label
     * @param opt_unlabeled_value_value set the value that will be interpreted as unlabeled: the numeric value for unlabeled (default 0)
     * @param opt_column_column select a single column to import: the column number or name
     * @param opt_drop_unused_labels remove any unused label values from the label table
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-label-import" as const,
        "input": input,
        "label_list_file": label_list_file,
        "output": output,
        "opt_discard_others": opt_discard_others,
        "opt_drop_unused_labels": opt_drop_unused_labels,
    };
    if (opt_unlabeled_value_value !== null) {
        params["opt_unlabeled_value_value"] = opt_unlabeled_value_value;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    return params;
}


function metric_label_import_cargs(
    params: MetricLabelImportParameters,
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
    cargs.push("-metric-label-import");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["label_list_file"] ?? null));
    cargs.push((params["output"] ?? null));
    if ((params["opt_discard_others"] ?? null)) {
        cargs.push("-discard-others");
    }
    if ((params["opt_unlabeled_value_value"] ?? null) !== null) {
        cargs.push(
            "-unlabeled-value",
            String((params["opt_unlabeled_value_value"] ?? null))
        );
    }
    if ((params["opt_column_column"] ?? null) !== null) {
        cargs.push(
            "-column",
            (params["opt_column_column"] ?? null)
        );
    }
    if ((params["opt_drop_unused_labels"] ?? null)) {
        cargs.push("-drop-unused-labels");
    }
    return cargs;
}


function metric_label_import_outputs(
    params: MetricLabelImportParameters,
    execution: Execution,
): MetricLabelImportOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricLabelImportOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function metric_label_import_execute(
    params: MetricLabelImportParameters,
    execution: Execution,
): MetricLabelImportOutputs {
    /**
     * Import a gifti label file from a metric file.
     * 
     * Creates a gifti label file from a metric file with label-like values.  You may specify the empty string (use "") for <label-list-file>, which will be treated as if it is an empty file.  The label list file must have the following format (2 lines per label):
     * 
     * <labelname>
     * <key> <red> <green> <blue> <alpha>
     * ...
     * 
     * Label names are specified on a separate line from their value and color, in order to let label names contain spaces.  Whitespace is trimmed from both ends of the label name, but is kept if it is in the middle of a label.  Do not specify the "unlabeled" key in the file, it is assumed that 0 means not labeled unless -unlabeled-value is specified.  The value of <key> specifies what value in the imported file should be used as this label (these same key values are also used in the output file).  The values of <red>, <green>, <blue> and <alpha> must be integers from 0 to 255, and will specify the color the label is drawn as (alpha of 255 means fully opaque, which is probably what you want).
     * 
     * By default, it will create new label names with names like LABEL_5 for any values encountered that are not mentioned in the list file, specify -discard-others to instead set these values to the "unlabeled" key.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricLabelImportOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_label_import_cargs(params, execution)
    const ret = metric_label_import_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_label_import(
    input: InputPathType,
    label_list_file: string,
    output: string,
    opt_discard_others: boolean = false,
    opt_unlabeled_value_value: number | null = null,
    opt_column_column: string | null = null,
    opt_drop_unused_labels: boolean = false,
    runner: Runner | null = null,
): MetricLabelImportOutputs {
    /**
     * Import a gifti label file from a metric file.
     * 
     * Creates a gifti label file from a metric file with label-like values.  You may specify the empty string (use "") for <label-list-file>, which will be treated as if it is an empty file.  The label list file must have the following format (2 lines per label):
     * 
     * <labelname>
     * <key> <red> <green> <blue> <alpha>
     * ...
     * 
     * Label names are specified on a separate line from their value and color, in order to let label names contain spaces.  Whitespace is trimmed from both ends of the label name, but is kept if it is in the middle of a label.  Do not specify the "unlabeled" key in the file, it is assumed that 0 means not labeled unless -unlabeled-value is specified.  The value of <key> specifies what value in the imported file should be used as this label (these same key values are also used in the output file).  The values of <red>, <green>, <blue> and <alpha> must be integers from 0 to 255, and will specify the color the label is drawn as (alpha of 255 means fully opaque, which is probably what you want).
     * 
     * By default, it will create new label names with names like LABEL_5 for any values encountered that are not mentioned in the list file, specify -discard-others to instead set these values to the "unlabeled" key.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param input the input metric file
     * @param label_list_file text file containing the values and names for labels
     * @param output the output gifti label file
     * @param opt_discard_others set any values not mentioned in the label list to the ??? label
     * @param opt_unlabeled_value_value set the value that will be interpreted as unlabeled: the numeric value for unlabeled (default 0)
     * @param opt_column_column select a single column to import: the column number or name
     * @param opt_drop_unused_labels remove any unused label values from the label table
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricLabelImportOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_LABEL_IMPORT_METADATA);
    const params = metric_label_import_params(input, label_list_file, output, opt_discard_others, opt_unlabeled_value_value, opt_column_column, opt_drop_unused_labels)
    return metric_label_import_execute(params, execution);
}


export {
      METRIC_LABEL_IMPORT_METADATA,
      MetricLabelImportOutputs,
      MetricLabelImportParameters,
      metric_label_import,
      metric_label_import_params,
};
