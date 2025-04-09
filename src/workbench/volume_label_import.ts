// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_LABEL_IMPORT_METADATA: Metadata = {
    id: "ca508bbef8dd8c07b01bbf2dd01768120fccfe96.boutiques",
    name: "volume-label-import",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeLabelImportParameters {
    "__STYXTYPE__": "volume-label-import";
    "input": InputPathType;
    "label_list_file": string;
    "output": string;
    "opt_discard_others": boolean;
    "opt_unlabeled_value_value"?: number | null | undefined;
    "opt_subvolume_subvol"?: string | null | undefined;
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
        "volume-label-import": volume_label_import_cargs,
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
        "volume-label-import": volume_label_import_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `volume_label_import(...)`.
 *
 * @interface
 */
interface VolumeLabelImportOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output workbench label volume
     */
    output: OutputPathType;
}


function volume_label_import_params(
    input: InputPathType,
    label_list_file: string,
    output: string,
    opt_discard_others: boolean = false,
    opt_unlabeled_value_value: number | null = null,
    opt_subvolume_subvol: string | null = null,
    opt_drop_unused_labels: boolean = false,
): VolumeLabelImportParameters {
    /**
     * Build parameters.
    
     * @param input the input volume file
     * @param label_list_file text file containing the values and names for labels
     * @param output the output workbench label volume
     * @param opt_discard_others set any voxels with values not mentioned in the label list to the ??? label
     * @param opt_unlabeled_value_value set the value that will be interpreted as unlabeled: the numeric value for unlabeled (default 0)
     * @param opt_subvolume_subvol select a single subvolume to import: the subvolume number or name
     * @param opt_drop_unused_labels remove any unused label values from the label table
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-label-import" as const,
        "input": input,
        "label_list_file": label_list_file,
        "output": output,
        "opt_discard_others": opt_discard_others,
        "opt_drop_unused_labels": opt_drop_unused_labels,
    };
    if (opt_unlabeled_value_value !== null) {
        params["opt_unlabeled_value_value"] = opt_unlabeled_value_value;
    }
    if (opt_subvolume_subvol !== null) {
        params["opt_subvolume_subvol"] = opt_subvolume_subvol;
    }
    return params;
}


function volume_label_import_cargs(
    params: VolumeLabelImportParameters,
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
    cargs.push("-volume-label-import");
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
    if ((params["opt_subvolume_subvol"] ?? null) !== null) {
        cargs.push(
            "-subvolume",
            (params["opt_subvolume_subvol"] ?? null)
        );
    }
    if ((params["opt_drop_unused_labels"] ?? null)) {
        cargs.push("-drop-unused-labels");
    }
    return cargs;
}


function volume_label_import_outputs(
    params: VolumeLabelImportParameters,
    execution: Execution,
): VolumeLabelImportOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeLabelImportOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function volume_label_import_execute(
    params: VolumeLabelImportParameters,
    execution: Execution,
): VolumeLabelImportOutputs {
    /**
     * Import a label volume to workbench format.
     * 
     * Creates a label volume from an integer-valued volume file.  The label name and color information is stored in the volume header in a nifti extension, with a similar format as in caret5, see -volume-help.  You may specify the empty string (use "") for <label-list-file>, which will be treated as if it is an empty file.  The label list file must have the following format (2 lines per label):
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
    
     * @returns NamedTuple of outputs (described in `VolumeLabelImportOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_label_import_cargs(params, execution)
    const ret = volume_label_import_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_label_import(
    input: InputPathType,
    label_list_file: string,
    output: string,
    opt_discard_others: boolean = false,
    opt_unlabeled_value_value: number | null = null,
    opt_subvolume_subvol: string | null = null,
    opt_drop_unused_labels: boolean = false,
    runner: Runner | null = null,
): VolumeLabelImportOutputs {
    /**
     * Import a label volume to workbench format.
     * 
     * Creates a label volume from an integer-valued volume file.  The label name and color information is stored in the volume header in a nifti extension, with a similar format as in caret5, see -volume-help.  You may specify the empty string (use "") for <label-list-file>, which will be treated as if it is an empty file.  The label list file must have the following format (2 lines per label):
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
    
     * @param input the input volume file
     * @param label_list_file text file containing the values and names for labels
     * @param output the output workbench label volume
     * @param opt_discard_others set any voxels with values not mentioned in the label list to the ??? label
     * @param opt_unlabeled_value_value set the value that will be interpreted as unlabeled: the numeric value for unlabeled (default 0)
     * @param opt_subvolume_subvol select a single subvolume to import: the subvolume number or name
     * @param opt_drop_unused_labels remove any unused label values from the label table
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeLabelImportOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_LABEL_IMPORT_METADATA);
    const params = volume_label_import_params(input, label_list_file, output, opt_discard_others, opt_unlabeled_value_value, opt_subvolume_subvol, opt_drop_unused_labels)
    return volume_label_import_execute(params, execution);
}


export {
      VOLUME_LABEL_IMPORT_METADATA,
      VolumeLabelImportOutputs,
      VolumeLabelImportParameters,
      volume_label_import,
      volume_label_import_params,
};
