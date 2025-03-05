// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GIFTI_LABEL_ADD_PREFIX_METADATA: Metadata = {
    id: "3d379a6c755dab747292a0a91f754e423ff73eca.boutiques",
    name: "gifti-label-add-prefix",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface GiftiLabelAddPrefixParameters {
    "__STYXTYPE__": "gifti-label-add-prefix";
    "label_in": InputPathType;
    "prefix": string;
    "label_out": string;
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
        "gifti-label-add-prefix": gifti_label_add_prefix_cargs,
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
        "gifti-label-add-prefix": gifti_label_add_prefix_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `gifti_label_add_prefix(...)`.
 *
 * @interface
 */
interface GiftiLabelAddPrefixOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output label file
     */
    label_out: OutputPathType;
}


function gifti_label_add_prefix_params(
    label_in: InputPathType,
    prefix: string,
    label_out: string,
): GiftiLabelAddPrefixParameters {
    /**
     * Build parameters.
    
     * @param label_in the input label file
     * @param prefix the prefix string to add
     * @param label_out the output label file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "gifti-label-add-prefix" as const,
        "label_in": label_in,
        "prefix": prefix,
        "label_out": label_out,
    };
    return params;
}


function gifti_label_add_prefix_cargs(
    params: GiftiLabelAddPrefixParameters,
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
    cargs.push("-gifti-label-add-prefix");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    cargs.push((params["label_out"] ?? null));
    return cargs;
}


function gifti_label_add_prefix_outputs(
    params: GiftiLabelAddPrefixParameters,
    execution: Execution,
): GiftiLabelAddPrefixOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GiftiLabelAddPrefixOutputs = {
        root: execution.outputFile("."),
        label_out: execution.outputFile([(params["label_out"] ?? null)].join('')),
    };
    return ret;
}


function gifti_label_add_prefix_execute(
    params: GiftiLabelAddPrefixParameters,
    execution: Execution,
): GiftiLabelAddPrefixOutputs {
    /**
     * Add prefix to all label names in a gifti label file.
     * 
     * For each label other than '???', prepend <prefix> to the label name.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GiftiLabelAddPrefixOutputs`).
     */
    params = execution.params(params)
    const cargs = gifti_label_add_prefix_cargs(params, execution)
    const ret = gifti_label_add_prefix_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function gifti_label_add_prefix(
    label_in: InputPathType,
    prefix: string,
    label_out: string,
    runner: Runner | null = null,
): GiftiLabelAddPrefixOutputs {
    /**
     * Add prefix to all label names in a gifti label file.
     * 
     * For each label other than '???', prepend <prefix> to the label name.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_in the input label file
     * @param prefix the prefix string to add
     * @param label_out the output label file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GiftiLabelAddPrefixOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GIFTI_LABEL_ADD_PREFIX_METADATA);
    const params = gifti_label_add_prefix_params(label_in, prefix, label_out)
    return gifti_label_add_prefix_execute(params, execution);
}


export {
      GIFTI_LABEL_ADD_PREFIX_METADATA,
      GiftiLabelAddPrefixOutputs,
      GiftiLabelAddPrefixParameters,
      gifti_label_add_prefix,
      gifti_label_add_prefix_params,
};
