// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LIST_OTL_LABELS_METADATA: Metadata = {
    id: "2093ee83fcca985e5be56e6cc6e4676af4aa43df.boutiques",
    name: "list_otl_labels",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ListOtlLabelsParameters {
    "__STYXTYPE__": "list_otl_labels";
    "input_file": InputPathType;
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
        "list_otl_labels": list_otl_labels_cargs,
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
 * Output object returned when calling `list_otl_labels(...)`.
 *
 * @interface
 */
interface ListOtlLabelsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function list_otl_labels_params(
    input_file: InputPathType,
): ListOtlLabelsParameters {
    /**
     * Build parameters.
    
     * @param input_file Input volume filename
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "list_otl_labels" as const,
        "input_file": input_file,
    };
    return params;
}


function list_otl_labels_cargs(
    params: ListOtlLabelsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("list_otl_labels");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    return cargs;
}


function list_otl_labels_outputs(
    params: ListOtlLabelsParameters,
    execution: Execution,
): ListOtlLabelsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ListOtlLabelsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function list_otl_labels_execute(
    params: ListOtlLabelsParameters,
    execution: Execution,
): ListOtlLabelsOutputs {
    /**
     * Tool for listing labels in an imaging file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ListOtlLabelsOutputs`).
     */
    params = execution.params(params)
    const cargs = list_otl_labels_cargs(params, execution)
    const ret = list_otl_labels_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function list_otl_labels(
    input_file: InputPathType,
    runner: Runner | null = null,
): ListOtlLabelsOutputs {
    /**
     * Tool for listing labels in an imaging file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input volume filename
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ListOtlLabelsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LIST_OTL_LABELS_METADATA);
    const params = list_otl_labels_params(input_file)
    return list_otl_labels_execute(params, execution);
}


export {
      LIST_OTL_LABELS_METADATA,
      ListOtlLabelsOutputs,
      ListOtlLabelsParameters,
      list_otl_labels,
      list_otl_labels_params,
};
