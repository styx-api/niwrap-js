// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL_PROBABILITY_METADATA: Metadata = {
    id: "3bf96115558abb862c2cc39f754bd2330ac604ee.boutiques",
    name: "label-probability",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface LabelProbabilityParameters {
    "__STYXTYPE__": "label-probability";
    "label_maps": InputPathType;
    "probability_metric_out": string;
    "opt_exclude_unlabeled": boolean;
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
        "label-probability": label_probability_cargs,
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
        "label-probability": label_probability_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `label_probability(...)`.
 *
 * @interface
 */
interface LabelProbabilityOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the relative frequencies of each label at each vertex
     */
    probability_metric_out: OutputPathType;
}


function label_probability_params(
    label_maps: InputPathType,
    probability_metric_out: string,
    opt_exclude_unlabeled: boolean = false,
): LabelProbabilityParameters {
    /**
     * Build parameters.
    
     * @param label_maps label file containing individual label maps from many subjects
     * @param probability_metric_out the relative frequencies of each label at each vertex
     * @param opt_exclude_unlabeled don't make a probability map of the unlabeled key
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label-probability" as const,
        "label_maps": label_maps,
        "probability_metric_out": probability_metric_out,
        "opt_exclude_unlabeled": opt_exclude_unlabeled,
    };
    return params;
}


function label_probability_cargs(
    params: LabelProbabilityParameters,
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
    cargs.push("-label-probability");
    cargs.push(execution.inputFile((params["label_maps"] ?? null)));
    cargs.push((params["probability_metric_out"] ?? null));
    if ((params["opt_exclude_unlabeled"] ?? null)) {
        cargs.push("-exclude-unlabeled");
    }
    return cargs;
}


function label_probability_outputs(
    params: LabelProbabilityParameters,
    execution: Execution,
): LabelProbabilityOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LabelProbabilityOutputs = {
        root: execution.outputFile("."),
        probability_metric_out: execution.outputFile([(params["probability_metric_out"] ?? null)].join('')),
    };
    return ret;
}


function label_probability_execute(
    params: LabelProbabilityParameters,
    execution: Execution,
): LabelProbabilityOutputs {
    /**
     * Find frequency of surface labels.
     * 
     * This command outputs a set of soft ROIs, one for each label in the input, where the value is how many of the input maps had that label at that vertex, divided by the number of input maps.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LabelProbabilityOutputs`).
     */
    params = execution.params(params)
    const cargs = label_probability_cargs(params, execution)
    const ret = label_probability_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label_probability(
    label_maps: InputPathType,
    probability_metric_out: string,
    opt_exclude_unlabeled: boolean = false,
    runner: Runner | null = null,
): LabelProbabilityOutputs {
    /**
     * Find frequency of surface labels.
     * 
     * This command outputs a set of soft ROIs, one for each label in the input, where the value is how many of the input maps had that label at that vertex, divided by the number of input maps.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_maps label file containing individual label maps from many subjects
     * @param probability_metric_out the relative frequencies of each label at each vertex
     * @param opt_exclude_unlabeled don't make a probability map of the unlabeled key
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LabelProbabilityOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL_PROBABILITY_METADATA);
    const params = label_probability_params(label_maps, probability_metric_out, opt_exclude_unlabeled)
    return label_probability_execute(params, execution);
}


export {
      LABEL_PROBABILITY_METADATA,
      LabelProbabilityOutputs,
      LabelProbabilityParameters,
      label_probability,
      label_probability_params,
};
