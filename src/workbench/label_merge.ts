// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL_MERGE_METADATA: Metadata = {
    id: "db3ae692db4c86627df663a917e751144fd992bd.boutiques",
    name: "label-merge",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface LabelMergeUpToParameters {
    "__STYXTYPE__": "up_to";
    "last_column": string;
    "opt_reverse": boolean;
}


interface LabelMergeColumnParameters {
    "__STYXTYPE__": "column";
    "column": string;
    "up_to"?: LabelMergeUpToParameters | null | undefined;
}


interface LabelMergeLabelParameters {
    "__STYXTYPE__": "label";
    "label_in": InputPathType;
    "column"?: Array<LabelMergeColumnParameters> | null | undefined;
}


interface LabelMergeParameters {
    "__STYXTYPE__": "label-merge";
    "label_out": string;
    "label"?: Array<LabelMergeLabelParameters> | null | undefined;
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
        "label-merge": label_merge_cargs,
        "label": label_merge_label_cargs,
        "column": label_merge_column_cargs,
        "up_to": label_merge_up_to_cargs,
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
        "label-merge": label_merge_outputs,
    };
    return outputsFuncs[t];
}


function label_merge_up_to_params(
    last_column: string,
    opt_reverse: boolean = false,
): LabelMergeUpToParameters {
    /**
     * Build parameters.
    
     * @param last_column the number or name of the last column to include
     * @param opt_reverse use the range in reverse order
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "up_to" as const,
        "last_column": last_column,
        "opt_reverse": opt_reverse,
    };
    return params;
}


function label_merge_up_to_cargs(
    params: LabelMergeUpToParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-up-to");
    cargs.push((params["last_column"] ?? null));
    if ((params["opt_reverse"] ?? null)) {
        cargs.push("-reverse");
    }
    return cargs;
}


function label_merge_column_params(
    column: string,
    up_to: LabelMergeUpToParameters | null = null,
): LabelMergeColumnParameters {
    /**
     * Build parameters.
    
     * @param column the column number or name
     * @param up_to use an inclusive range of columns
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "column" as const,
        "column": column,
    };
    if (up_to !== null) {
        params["up_to"] = up_to;
    }
    return params;
}


function label_merge_column_cargs(
    params: LabelMergeColumnParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-column");
    cargs.push((params["column"] ?? null));
    if ((params["up_to"] ?? null) !== null) {
        cargs.push(...dynCargs((params["up_to"] ?? null).__STYXTYPE__)((params["up_to"] ?? null), execution));
    }
    return cargs;
}


function label_merge_label_params(
    label_in: InputPathType,
    column: Array<LabelMergeColumnParameters> | null = null,
): LabelMergeLabelParameters {
    /**
     * Build parameters.
    
     * @param label_in a label file to use columns from
     * @param column select a single column to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label" as const,
        "label_in": label_in,
    };
    if (column !== null) {
        params["column"] = column;
    }
    return params;
}


function label_merge_label_cargs(
    params: LabelMergeLabelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-label");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    if ((params["column"] ?? null) !== null) {
        cargs.push(...(params["column"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


/**
 * Output object returned when calling `label_merge(...)`.
 *
 * @interface
 */
interface LabelMergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output label
     */
    label_out: OutputPathType;
}


function label_merge_params(
    label_out: string,
    label: Array<LabelMergeLabelParameters> | null = null,
): LabelMergeParameters {
    /**
     * Build parameters.
    
     * @param label_out the output label
     * @param label specify an input label
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label-merge" as const,
        "label_out": label_out,
    };
    if (label !== null) {
        params["label"] = label;
    }
    return params;
}


function label_merge_cargs(
    params: LabelMergeParameters,
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
    cargs.push("-label-merge");
    cargs.push((params["label_out"] ?? null));
    if ((params["label"] ?? null) !== null) {
        cargs.push(...(params["label"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function label_merge_outputs(
    params: LabelMergeParameters,
    execution: Execution,
): LabelMergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LabelMergeOutputs = {
        root: execution.outputFile("."),
        label_out: execution.outputFile([(params["label_out"] ?? null)].join('')),
    };
    return ret;
}


function label_merge_execute(
    params: LabelMergeParameters,
    execution: Execution,
): LabelMergeOutputs {
    /**
     * Merge label files into a new file.
     * 
     * Takes one or more label files and constructs a new label file by concatenating columns from them.  The input files must have the same number of vertices and the same structure.
     * 
     * Example: wb_command -label-merge out.label.gii -label first.label.gii -column 1 -label second.label.gii
     * 
     * This example would take the first column from first.label.gii and all subvolumes from second.label.gii, and write these to out.label.gii.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LabelMergeOutputs`).
     */
    params = execution.params(params)
    const cargs = label_merge_cargs(params, execution)
    const ret = label_merge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label_merge(
    label_out: string,
    label: Array<LabelMergeLabelParameters> | null = null,
    runner: Runner | null = null,
): LabelMergeOutputs {
    /**
     * Merge label files into a new file.
     * 
     * Takes one or more label files and constructs a new label file by concatenating columns from them.  The input files must have the same number of vertices and the same structure.
     * 
     * Example: wb_command -label-merge out.label.gii -label first.label.gii -column 1 -label second.label.gii
     * 
     * This example would take the first column from first.label.gii and all subvolumes from second.label.gii, and write these to out.label.gii.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_out the output label
     * @param label specify an input label
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LabelMergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL_MERGE_METADATA);
    const params = label_merge_params(label_out, label)
    return label_merge_execute(params, execution);
}


export {
      LABEL_MERGE_METADATA,
      LabelMergeColumnParameters,
      LabelMergeLabelParameters,
      LabelMergeOutputs,
      LabelMergeParameters,
      LabelMergeUpToParameters,
      label_merge,
      label_merge_column_params,
      label_merge_label_params,
      label_merge_params,
      label_merge_up_to_params,
};
