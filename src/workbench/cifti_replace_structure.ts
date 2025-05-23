// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_REPLACE_STRUCTURE_METADATA: Metadata = {
    id: "0a9c4e55c6a301030ae566d8d0a08669de5218a9.boutiques",
    name: "cifti-replace-structure",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiReplaceStructureVolumeAllParameters {
    "__STYXTYPE__": "volume_all";
    "volume": InputPathType;
    "opt_from_cropped": boolean;
}


interface CiftiReplaceStructureLabelParameters {
    "__STYXTYPE__": "label";
    "structure": string;
    "label": InputPathType;
}


interface CiftiReplaceStructureMetricParameters {
    "__STYXTYPE__": "metric";
    "structure": string;
    "metric": InputPathType;
}


interface CiftiReplaceStructureVolumeParameters {
    "__STYXTYPE__": "volume";
    "structure": string;
    "volume": InputPathType;
    "opt_from_cropped": boolean;
}


interface CiftiReplaceStructureParameters {
    "__STYXTYPE__": "cifti-replace-structure";
    "cifti": string;
    "direction": string;
    "volume_all"?: CiftiReplaceStructureVolumeAllParameters | null | undefined;
    "opt_discard_unused_labels": boolean;
    "opt_label_collision_action"?: string | null | undefined;
    "label"?: Array<CiftiReplaceStructureLabelParameters> | null | undefined;
    "metric"?: Array<CiftiReplaceStructureMetricParameters> | null | undefined;
    "volume"?: Array<CiftiReplaceStructureVolumeParameters> | null | undefined;
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
        "cifti-replace-structure": cifti_replace_structure_cargs,
        "volume_all": cifti_replace_structure_volume_all_cargs,
        "label": cifti_replace_structure_label_cargs,
        "metric": cifti_replace_structure_metric_cargs,
        "volume": cifti_replace_structure_volume_cargs,
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


function cifti_replace_structure_volume_all_params(
    volume: InputPathType,
    opt_from_cropped: boolean = false,
): CiftiReplaceStructureVolumeAllParameters {
    /**
     * Build parameters.
    
     * @param volume the input volume
     * @param opt_from_cropped the input is cropped to the size of the data
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume_all" as const,
        "volume": volume,
        "opt_from_cropped": opt_from_cropped,
    };
    return params;
}


function cifti_replace_structure_volume_all_cargs(
    params: CiftiReplaceStructureVolumeAllParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume-all");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    if ((params["opt_from_cropped"] ?? null)) {
        cargs.push("-from-cropped");
    }
    return cargs;
}


function cifti_replace_structure_label_params(
    structure: string,
    label: InputPathType,
): CiftiReplaceStructureLabelParameters {
    /**
     * Build parameters.
    
     * @param structure the structure to replace the data of
     * @param label the input label file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label" as const,
        "structure": structure,
        "label": label,
    };
    return params;
}


function cifti_replace_structure_label_cargs(
    params: CiftiReplaceStructureLabelParameters,
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
    cargs.push((params["structure"] ?? null));
    cargs.push(execution.inputFile((params["label"] ?? null)));
    return cargs;
}


function cifti_replace_structure_metric_params(
    structure: string,
    metric: InputPathType,
): CiftiReplaceStructureMetricParameters {
    /**
     * Build parameters.
    
     * @param structure the structure to replace the data of
     * @param metric the input metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric" as const,
        "structure": structure,
        "metric": metric,
    };
    return params;
}


function cifti_replace_structure_metric_cargs(
    params: CiftiReplaceStructureMetricParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-metric");
    cargs.push((params["structure"] ?? null));
    cargs.push(execution.inputFile((params["metric"] ?? null)));
    return cargs;
}


function cifti_replace_structure_volume_params(
    structure: string,
    volume: InputPathType,
    opt_from_cropped: boolean = false,
): CiftiReplaceStructureVolumeParameters {
    /**
     * Build parameters.
    
     * @param structure the structure to replace the data of
     * @param volume the input volume
     * @param opt_from_cropped the input is cropped to the size of the component
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume" as const,
        "structure": structure,
        "volume": volume,
        "opt_from_cropped": opt_from_cropped,
    };
    return params;
}


function cifti_replace_structure_volume_cargs(
    params: CiftiReplaceStructureVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume");
    cargs.push((params["structure"] ?? null));
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    if ((params["opt_from_cropped"] ?? null)) {
        cargs.push("-from-cropped");
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_replace_structure(...)`.
 *
 * @interface
 */
interface CiftiReplaceStructureOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function cifti_replace_structure_params(
    cifti: string,
    direction: string,
    volume_all: CiftiReplaceStructureVolumeAllParameters | null = null,
    opt_discard_unused_labels: boolean = false,
    opt_label_collision_action: string | null = null,
    label: Array<CiftiReplaceStructureLabelParameters> | null = null,
    metric: Array<CiftiReplaceStructureMetricParameters> | null = null,
    volume: Array<CiftiReplaceStructureVolumeParameters> | null = null,
): CiftiReplaceStructureParameters {
    /**
     * Build parameters.
    
     * @param cifti the cifti to modify
     * @param direction which dimension to interpret as a single map, ROW or COLUMN
     * @param volume_all replace the data in all volume components
     * @param opt_discard_unused_labels when operating on a dlabel file, drop any unused label keys from the label table
     * @param opt_label_collision_action how to handle conflicts between label keys: 'ERROR', 'LEFT_SURFACE_FIRST', or 'LEGACY', default 'ERROR', use 'LEGACY' to match v1.4.2 and earlier
     * @param label replace the data in a surface label component
     * @param metric replace the data in a surface component
     * @param volume replace the data in a volume component
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-replace-structure" as const,
        "cifti": cifti,
        "direction": direction,
        "opt_discard_unused_labels": opt_discard_unused_labels,
    };
    if (volume_all !== null) {
        params["volume_all"] = volume_all;
    }
    if (opt_label_collision_action !== null) {
        params["opt_label_collision_action"] = opt_label_collision_action;
    }
    if (label !== null) {
        params["label"] = label;
    }
    if (metric !== null) {
        params["metric"] = metric;
    }
    if (volume !== null) {
        params["volume"] = volume;
    }
    return params;
}


function cifti_replace_structure_cargs(
    params: CiftiReplaceStructureParameters,
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
    cargs.push("-cifti-replace-structure");
    cargs.push((params["cifti"] ?? null));
    cargs.push((params["direction"] ?? null));
    if ((params["volume_all"] ?? null) !== null) {
        cargs.push(...dynCargs((params["volume_all"] ?? null).__STYXTYPE__)((params["volume_all"] ?? null), execution));
    }
    if ((params["opt_discard_unused_labels"] ?? null)) {
        cargs.push("-discard-unused-labels");
    }
    if ((params["opt_label_collision_action"] ?? null) !== null) {
        cargs.push(
            "-label-collision",
            (params["opt_label_collision_action"] ?? null)
        );
    }
    if ((params["label"] ?? null) !== null) {
        cargs.push(...(params["label"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["metric"] ?? null) !== null) {
        cargs.push(...(params["metric"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["volume"] ?? null) !== null) {
        cargs.push(...(params["volume"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_replace_structure_outputs(
    params: CiftiReplaceStructureParameters,
    execution: Execution,
): CiftiReplaceStructureOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiReplaceStructureOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function cifti_replace_structure_execute(
    params: CiftiReplaceStructureParameters,
    execution: Execution,
): CiftiReplaceStructureOutputs {
    /**
     * Replace data in a structure in a cifti file.
     * 
     * This is a fairly low-level command, you probably want to use -cifti-create-dense-from-template instead.
     * 
     * You must specify at least one of -metric, -label, -volume, or -volume-all for this command to do anything.  Input volumes must line up with the output of -cifti-separate.  For dtseries/dscalar, use COLUMN, and if your dconn matrix will be fully symmetric, COLUMN is more efficient.  The -volume-all option must not be specified when using a -volume option.  A -metric option must not be specified when using a -label option, and is not recommended on a label-type cifti file.  For each <structure> argument, use one of the following strings:
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiReplaceStructureOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_replace_structure_cargs(params, execution)
    const ret = cifti_replace_structure_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_replace_structure(
    cifti: string,
    direction: string,
    volume_all: CiftiReplaceStructureVolumeAllParameters | null = null,
    opt_discard_unused_labels: boolean = false,
    opt_label_collision_action: string | null = null,
    label: Array<CiftiReplaceStructureLabelParameters> | null = null,
    metric: Array<CiftiReplaceStructureMetricParameters> | null = null,
    volume: Array<CiftiReplaceStructureVolumeParameters> | null = null,
    runner: Runner | null = null,
): CiftiReplaceStructureOutputs {
    /**
     * Replace data in a structure in a cifti file.
     * 
     * This is a fairly low-level command, you probably want to use -cifti-create-dense-from-template instead.
     * 
     * You must specify at least one of -metric, -label, -volume, or -volume-all for this command to do anything.  Input volumes must line up with the output of -cifti-separate.  For dtseries/dscalar, use COLUMN, and if your dconn matrix will be fully symmetric, COLUMN is more efficient.  The -volume-all option must not be specified when using a -volume option.  A -metric option must not be specified when using a -label option, and is not recommended on a label-type cifti file.  For each <structure> argument, use one of the following strings:
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti the cifti to modify
     * @param direction which dimension to interpret as a single map, ROW or COLUMN
     * @param volume_all replace the data in all volume components
     * @param opt_discard_unused_labels when operating on a dlabel file, drop any unused label keys from the label table
     * @param opt_label_collision_action how to handle conflicts between label keys: 'ERROR', 'LEFT_SURFACE_FIRST', or 'LEGACY', default 'ERROR', use 'LEGACY' to match v1.4.2 and earlier
     * @param label replace the data in a surface label component
     * @param metric replace the data in a surface component
     * @param volume replace the data in a volume component
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiReplaceStructureOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_REPLACE_STRUCTURE_METADATA);
    const params = cifti_replace_structure_params(cifti, direction, volume_all, opt_discard_unused_labels, opt_label_collision_action, label, metric, volume)
    return cifti_replace_structure_execute(params, execution);
}


export {
      CIFTI_REPLACE_STRUCTURE_METADATA,
      CiftiReplaceStructureLabelParameters,
      CiftiReplaceStructureMetricParameters,
      CiftiReplaceStructureOutputs,
      CiftiReplaceStructureParameters,
      CiftiReplaceStructureVolumeAllParameters,
      CiftiReplaceStructureVolumeParameters,
      cifti_replace_structure,
      cifti_replace_structure_label_params,
      cifti_replace_structure_metric_params,
      cifti_replace_structure_params,
      cifti_replace_structure_volume_all_params,
      cifti_replace_structure_volume_params,
};
