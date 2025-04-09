// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_COMPUTE_OVERLAP_METADATA: Metadata = {
    id: "89394442cf520ee4ec9dd5ada3c18bd5fdb4dfe4.boutiques",
    name: "mri_compute_overlap",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriComputeOverlapParameters {
    "__STYXTYPE__": "mri_compute_overlap";
    "volumes": Array<InputPathType>;
    "label_numbers"?: Array<string> | null | undefined;
    "all_labels": boolean;
    "show_label": boolean;
    "total_overlap": boolean;
    "no_summary": boolean;
    "mask"?: InputPathType | null | undefined;
    "output_file"?: string | null | undefined;
    "quiet_mode": boolean;
    "translate_label"?: Array<number> | null | undefined;
    "help": boolean;
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
        "mri_compute_overlap": mri_compute_overlap_cargs,
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
 * Output object returned when calling `mri_compute_overlap(...)`.
 *
 * @interface
 */
interface MriComputeOverlapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_compute_overlap_params(
    volumes: Array<InputPathType>,
    label_numbers: Array<string> | null = null,
    all_labels: boolean = false,
    show_label: boolean = false,
    total_overlap: boolean = false,
    no_summary: boolean = false,
    mask: InputPathType | null = null,
    output_file: string | null = null,
    quiet_mode: boolean = false,
    translate_label: Array<number> | null = null,
    help: boolean = false,
): MriComputeOverlapParameters {
    /**
     * Build parameters.
    
     * @param volumes Input volume files for which overlap measures are computed.
     * @param label_numbers List of specific label numbers for which to compute overlap measures. If not specified, all labels are considered if -a is provided.
     * @param all_labels Compute overlap for all labels.
     * @param show_label Show label name for segmentation.
     * @param total_overlap Compute the total overlap, which is the number of voxels that are the same among all labels.
     * @param no_summary Do not compute total label summary.
     * @param mask Limit the domain of the calculation to the nonzero voxels in specified volume.
     * @param output_file Filename to write results to.
     * @param quiet_mode Do not display results on standard display. If -l is specified, this flag is automatically set.
     * @param translate_label Translate label l1 to label l2.
     * @param help Print help.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_compute_overlap" as const,
        "volumes": volumes,
        "all_labels": all_labels,
        "show_label": show_label,
        "total_overlap": total_overlap,
        "no_summary": no_summary,
        "quiet_mode": quiet_mode,
        "help": help,
    };
    if (label_numbers !== null) {
        params["label_numbers"] = label_numbers;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (translate_label !== null) {
        params["translate_label"] = translate_label;
    }
    return params;
}


function mri_compute_overlap_cargs(
    params: MriComputeOverlapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_compute_overlap");
    cargs.push(...(params["volumes"] ?? null).map(f => execution.inputFile(f)));
    if ((params["label_numbers"] ?? null) !== null) {
        cargs.push(...(params["label_numbers"] ?? null));
    }
    if ((params["all_labels"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["show_label"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["total_overlap"] ?? null)) {
        cargs.push("-total");
    }
    if ((params["no_summary"] ?? null)) {
        cargs.push("-nosummary");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["output_file"] ?? null)
        );
    }
    if ((params["quiet_mode"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["translate_label"] ?? null) !== null) {
        cargs.push(
            "-t",
            ...(params["translate_label"] ?? null).map(String)
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function mri_compute_overlap_outputs(
    params: MriComputeOverlapParameters,
    execution: Execution,
): MriComputeOverlapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriComputeOverlapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_compute_overlap_execute(
    params: MriComputeOverlapParameters,
    execution: Execution,
): MriComputeOverlapOutputs {
    /**
     * Computes three different types of overlap measures for labels in input volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriComputeOverlapOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_compute_overlap_cargs(params, execution)
    const ret = mri_compute_overlap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_compute_overlap(
    volumes: Array<InputPathType>,
    label_numbers: Array<string> | null = null,
    all_labels: boolean = false,
    show_label: boolean = false,
    total_overlap: boolean = false,
    no_summary: boolean = false,
    mask: InputPathType | null = null,
    output_file: string | null = null,
    quiet_mode: boolean = false,
    translate_label: Array<number> | null = null,
    help: boolean = false,
    runner: Runner | null = null,
): MriComputeOverlapOutputs {
    /**
     * Computes three different types of overlap measures for labels in input volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param volumes Input volume files for which overlap measures are computed.
     * @param label_numbers List of specific label numbers for which to compute overlap measures. If not specified, all labels are considered if -a is provided.
     * @param all_labels Compute overlap for all labels.
     * @param show_label Show label name for segmentation.
     * @param total_overlap Compute the total overlap, which is the number of voxels that are the same among all labels.
     * @param no_summary Do not compute total label summary.
     * @param mask Limit the domain of the calculation to the nonzero voxels in specified volume.
     * @param output_file Filename to write results to.
     * @param quiet_mode Do not display results on standard display. If -l is specified, this flag is automatically set.
     * @param translate_label Translate label l1 to label l2.
     * @param help Print help.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriComputeOverlapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_COMPUTE_OVERLAP_METADATA);
    const params = mri_compute_overlap_params(volumes, label_numbers, all_labels, show_label, total_overlap, no_summary, mask, output_file, quiet_mode, translate_label, help)
    return mri_compute_overlap_execute(params, execution);
}


export {
      MRI_COMPUTE_OVERLAP_METADATA,
      MriComputeOverlapOutputs,
      MriComputeOverlapParameters,
      mri_compute_overlap,
      mri_compute_overlap_params,
};
