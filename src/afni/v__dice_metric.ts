// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DICE_METRIC_METADATA: Metadata = {
    id: "fa48f6aeea318af3d334f9731c18e1c38c549246.boutiques",
    name: "@DiceMetric",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDiceMetricParameters {
    "__STYXTYPE__": "@DiceMetric";
    "base": InputPathType;
    "dsets": Array<InputPathType>;
    "max_roi"?: number | null | undefined;
    "labeltable"?: InputPathType | null | undefined;
    "forceoutput"?: InputPathType | null | undefined;
    "echo": boolean;
    "save_match": boolean;
    "save_diff": boolean;
    "do_not_mask_by_base": boolean;
    "mask_by_base": boolean;
    "prefix"?: string | null | undefined;
    "ignore_bad": boolean;
    "keep_tmp": boolean;
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
        "@DiceMetric": v__dice_metric_cargs,
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
 * Output object returned when calling `v__dice_metric(...)`.
 *
 * @interface
 */
interface VDiceMetricOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__dice_metric_params(
    base: InputPathType,
    dsets: Array<InputPathType>,
    max_roi: number | null = null,
    labeltable: InputPathType | null = null,
    forceoutput: InputPathType | null = null,
    echo: boolean = false,
    save_match: boolean = false,
    save_diff: boolean = false,
    do_not_mask_by_base: boolean = false,
    mask_by_base: boolean = false,
    prefix: string | null = null,
    ignore_bad: boolean = false,
    keep_tmp: boolean = false,
): VDiceMetricParameters {
    /**
     * Build parameters.
    
     * @param base Name of base (reference) segmentation
     * @param dsets Data sets for which the Dice Metric with BASE is computed. This should be the last option on the command line.
     * @param max_roi The maximum possible ROI index. Default is 12 or based on LTFILE if specified.
     * @param labeltable If given, the labeltable is used to set the default MAX_ROI parameter. Also, this option forces an output for each key in the LTFILE.
     * @param forceoutput If given, force output for each class in LTFILE.
     * @param echo Set echo.
     * @param save_match Save volume showing BASE*equals(BASE,DSET).
     * @param save_diff Save volume showing BASE*(1-equals(BASE,DSET)).
     * @param do_not_mask_by_base Do not mask dset by step(base) before computing Dice coefficient.
     * @param mask_by_base Mask dset by the step(base) before computing Dice coefficient.
     * @param prefix Use PREFIX for the output table. Default is separate results for each dset to stdout.
     * @param ignore_bad Warn if encountering bad scenarios, but do not create a zero entry.
     * @param keep_tmp Keep temporary files for debugging. Note that you should delete temporary files before rerunning the script.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@DiceMetric" as const,
        "base": base,
        "dsets": dsets,
        "echo": echo,
        "save_match": save_match,
        "save_diff": save_diff,
        "do_not_mask_by_base": do_not_mask_by_base,
        "mask_by_base": mask_by_base,
        "ignore_bad": ignore_bad,
        "keep_tmp": keep_tmp,
    };
    if (max_roi !== null) {
        params["max_roi"] = max_roi;
    }
    if (labeltable !== null) {
        params["labeltable"] = labeltable;
    }
    if (forceoutput !== null) {
        params["forceoutput"] = forceoutput;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v__dice_metric_cargs(
    params: VDiceMetricParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@DiceMetric");
    cargs.push(
        "-base",
        execution.inputFile((params["base"] ?? null))
    );
    cargs.push(
        "-dsets",
        ...(params["dsets"] ?? null).map(f => execution.inputFile(f))
    );
    if ((params["max_roi"] ?? null) !== null) {
        cargs.push(
            "-max_N_roi",
            String((params["max_roi"] ?? null))
        );
    }
    if ((params["labeltable"] ?? null) !== null) {
        cargs.push(
            "-labeltable",
            execution.inputFile((params["labeltable"] ?? null))
        );
    }
    if ((params["forceoutput"] ?? null) !== null) {
        cargs.push(
            "-forceoutput",
            execution.inputFile((params["forceoutput"] ?? null))
        );
    }
    if ((params["echo"] ?? null)) {
        cargs.push("-echo");
    }
    if ((params["save_match"] ?? null)) {
        cargs.push("-save_match");
    }
    if ((params["save_diff"] ?? null)) {
        cargs.push("-save_diff");
    }
    if ((params["do_not_mask_by_base"] ?? null)) {
        cargs.push("-do_not_mask_by_base");
    }
    if ((params["mask_by_base"] ?? null)) {
        cargs.push("-mask_by_base");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["ignore_bad"] ?? null)) {
        cargs.push("-ignore_bad");
    }
    if ((params["keep_tmp"] ?? null)) {
        cargs.push("-keep_tmp");
    }
    return cargs;
}


function v__dice_metric_outputs(
    params: VDiceMetricParameters,
    execution: Execution,
): VDiceMetricOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDiceMetricOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__dice_metric_execute(
    params: VDiceMetricParameters,
    execution: Execution,
): VDiceMetricOutputs {
    /**
     * Computes Dice Metric between BASE and each of the DSET volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDiceMetricOutputs`).
     */
    params = execution.params(params)
    const cargs = v__dice_metric_cargs(params, execution)
    const ret = v__dice_metric_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__dice_metric(
    base: InputPathType,
    dsets: Array<InputPathType>,
    max_roi: number | null = null,
    labeltable: InputPathType | null = null,
    forceoutput: InputPathType | null = null,
    echo: boolean = false,
    save_match: boolean = false,
    save_diff: boolean = false,
    do_not_mask_by_base: boolean = false,
    mask_by_base: boolean = false,
    prefix: string | null = null,
    ignore_bad: boolean = false,
    keep_tmp: boolean = false,
    runner: Runner | null = null,
): VDiceMetricOutputs {
    /**
     * Computes Dice Metric between BASE and each of the DSET volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param base Name of base (reference) segmentation
     * @param dsets Data sets for which the Dice Metric with BASE is computed. This should be the last option on the command line.
     * @param max_roi The maximum possible ROI index. Default is 12 or based on LTFILE if specified.
     * @param labeltable If given, the labeltable is used to set the default MAX_ROI parameter. Also, this option forces an output for each key in the LTFILE.
     * @param forceoutput If given, force output for each class in LTFILE.
     * @param echo Set echo.
     * @param save_match Save volume showing BASE*equals(BASE,DSET).
     * @param save_diff Save volume showing BASE*(1-equals(BASE,DSET)).
     * @param do_not_mask_by_base Do not mask dset by step(base) before computing Dice coefficient.
     * @param mask_by_base Mask dset by the step(base) before computing Dice coefficient.
     * @param prefix Use PREFIX for the output table. Default is separate results for each dset to stdout.
     * @param ignore_bad Warn if encountering bad scenarios, but do not create a zero entry.
     * @param keep_tmp Keep temporary files for debugging. Note that you should delete temporary files before rerunning the script.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDiceMetricOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DICE_METRIC_METADATA);
    const params = v__dice_metric_params(base, dsets, max_roi, labeltable, forceoutput, echo, save_match, save_diff, do_not_mask_by_base, mask_by_base, prefix, ignore_bad, keep_tmp)
    return v__dice_metric_execute(params, execution);
}


export {
      VDiceMetricOutputs,
      VDiceMetricParameters,
      V__DICE_METRIC_METADATA,
      v__dice_metric,
      v__dice_metric_params,
};
