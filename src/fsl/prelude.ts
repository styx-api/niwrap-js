// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PRELUDE_METADATA: Metadata = {
    id: "86c09e09261bfdc0e9026c7646e943b2d736e7f6.boutiques",
    name: "prelude",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PreludeParameters {
    "__STYXTYPE__": "prelude";
    "output_unwrap": string;
    "output_unwrap_alias": InputPathType;
    "complex_phase"?: InputPathType | null | undefined;
    "complex_phase_alias"?: InputPathType | null | undefined;
    "absolute_volume"?: InputPathType | null | undefined;
    "absolute_volume_alias"?: InputPathType | null | undefined;
    "phase_volume"?: InputPathType | null | undefined;
    "phase_volume_alias"?: InputPathType | null | undefined;
    "num_phase_split"?: number | null | undefined;
    "label_slices": boolean;
    "slice_processing": boolean;
    "slice_processing_alias": boolean;
    "force_3d": boolean;
    "force_3d_alias": boolean;
    "threshold"?: number | null | undefined;
    "threshold_alias"?: number | null | undefined;
    "mask_volume"?: InputPathType | null | undefined;
    "mask_volume_alias"?: InputPathType | null | undefined;
    "start_image"?: number | null | undefined;
    "end_image"?: number | null | undefined;
    "save_mask"?: InputPathType | null | undefined;
    "save_raw_phase"?: InputPathType | null | undefined;
    "save_raw_phase_alias"?: InputPathType | null | undefined;
    "save_labels"?: InputPathType | null | undefined;
    "save_labels_alias"?: InputPathType | null | undefined;
    "remove_ramps": boolean;
    "verbose": boolean;
    "verbose_alias": boolean;
    "help": boolean;
    "help_alias": boolean;
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
        "prelude": prelude_cargs,
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
        "prelude": prelude_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `prelude(...)`.
 *
 * @interface
 */
interface PreludeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Unwrapped phase output file
     */
    unwrapped_phase_output: OutputPathType;
    /**
     * Saved mask volume file
     */
    saved_mask_volume: OutputPathType | null;
    /**
     * Saved raw phase output file
     */
    saved_raw_phase_output: OutputPathType | null;
    /**
     * Saved area labels output file
     */
    saved_area_labels_output: OutputPathType | null;
}


function prelude_params(
    output_unwrap: string,
    output_unwrap_alias: InputPathType,
    complex_phase: InputPathType | null = null,
    complex_phase_alias: InputPathType | null = null,
    absolute_volume: InputPathType | null = null,
    absolute_volume_alias: InputPathType | null = null,
    phase_volume: InputPathType | null = null,
    phase_volume_alias: InputPathType | null = null,
    num_phase_split: number | null = null,
    label_slices: boolean = false,
    slice_processing: boolean = false,
    slice_processing_alias: boolean = false,
    force_3d: boolean = false,
    force_3d_alias: boolean = false,
    threshold: number | null = null,
    threshold_alias: number | null = null,
    mask_volume: InputPathType | null = null,
    mask_volume_alias: InputPathType | null = null,
    start_image: number | null = null,
    end_image: number | null = null,
    save_mask: InputPathType | null = null,
    save_raw_phase: InputPathType | null = null,
    save_raw_phase_alias: InputPathType | null = null,
    save_labels: InputPathType | null = null,
    save_labels_alias: InputPathType | null = null,
    remove_ramps: boolean = false,
    verbose: boolean = false,
    verbose_alias: boolean = false,
    help: boolean = false,
    help_alias: boolean = false,
): PreludeParameters {
    /**
     * Build parameters.
    
     * @param output_unwrap Filename for saving the unwrapped phase output
     * @param output_unwrap_alias Filename for saving the unwrapped phase output
     * @param complex_phase Filename of complex phase input volume
     * @param complex_phase_alias Filename of complex phase input volume
     * @param absolute_volume Filename of absolute input volume
     * @param absolute_volume_alias Filename of absolute input volume
     * @param phase_volume Filename of raw phase input volume
     * @param phase_volume_alias Filename of raw phase input volume
     * @param num_phase_split Number of phase partitions to use
     * @param label_slices Does label processing in 2D (slice at a time)
     * @param slice_processing Does all processing in 2D (slice at a time)
     * @param slice_processing_alias Does all processing in 2D (slice at a time)
     * @param force_3d Forces all processing to be full 3D
     * @param force_3d_alias Forces all processing to be full 3D
     * @param threshold Intensity threshold for masking
     * @param threshold_alias Intensity threshold for masking
     * @param mask_volume Filename of mask input volume
     * @param mask_volume_alias Filename of mask input volume
     * @param start_image First image number to process (default 0)
     * @param end_image Final image number to process (default Inf)
     * @param save_mask Filename for saving the mask volume
     * @param save_raw_phase Filename for saving the raw phase output
     * @param save_raw_phase_alias Filename for saving the raw phase output
     * @param save_labels Filename for saving the area labels output
     * @param save_labels_alias Filename for saving the area labels output
     * @param remove_ramps Remove phase ramps during unwrapping
     * @param verbose Switch on diagnostic messages
     * @param verbose_alias Switch on diagnostic messages
     * @param help Display help message
     * @param help_alias Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "prelude" as const,
        "output_unwrap": output_unwrap,
        "output_unwrap_alias": output_unwrap_alias,
        "label_slices": label_slices,
        "slice_processing": slice_processing,
        "slice_processing_alias": slice_processing_alias,
        "force_3d": force_3d,
        "force_3d_alias": force_3d_alias,
        "remove_ramps": remove_ramps,
        "verbose": verbose,
        "verbose_alias": verbose_alias,
        "help": help,
        "help_alias": help_alias,
    };
    if (complex_phase !== null) {
        params["complex_phase"] = complex_phase;
    }
    if (complex_phase_alias !== null) {
        params["complex_phase_alias"] = complex_phase_alias;
    }
    if (absolute_volume !== null) {
        params["absolute_volume"] = absolute_volume;
    }
    if (absolute_volume_alias !== null) {
        params["absolute_volume_alias"] = absolute_volume_alias;
    }
    if (phase_volume !== null) {
        params["phase_volume"] = phase_volume;
    }
    if (phase_volume_alias !== null) {
        params["phase_volume_alias"] = phase_volume_alias;
    }
    if (num_phase_split !== null) {
        params["num_phase_split"] = num_phase_split;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (threshold_alias !== null) {
        params["threshold_alias"] = threshold_alias;
    }
    if (mask_volume !== null) {
        params["mask_volume"] = mask_volume;
    }
    if (mask_volume_alias !== null) {
        params["mask_volume_alias"] = mask_volume_alias;
    }
    if (start_image !== null) {
        params["start_image"] = start_image;
    }
    if (end_image !== null) {
        params["end_image"] = end_image;
    }
    if (save_mask !== null) {
        params["save_mask"] = save_mask;
    }
    if (save_raw_phase !== null) {
        params["save_raw_phase"] = save_raw_phase;
    }
    if (save_raw_phase_alias !== null) {
        params["save_raw_phase_alias"] = save_raw_phase_alias;
    }
    if (save_labels !== null) {
        params["save_labels"] = save_labels;
    }
    if (save_labels_alias !== null) {
        params["save_labels_alias"] = save_labels_alias;
    }
    return params;
}


function prelude_cargs(
    params: PreludeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("prelude");
    cargs.push(
        "-o",
        (params["output_unwrap"] ?? null)
    );
    cargs.push(
        "-u",
        execution.inputFile((params["output_unwrap_alias"] ?? null))
    );
    if ((params["complex_phase"] ?? null) !== null) {
        cargs.push(
            "-c",
            execution.inputFile((params["complex_phase"] ?? null))
        );
    }
    if ((params["complex_phase_alias"] ?? null) !== null) {
        cargs.push(
            "--complex",
            execution.inputFile((params["complex_phase_alias"] ?? null))
        );
    }
    if ((params["absolute_volume"] ?? null) !== null) {
        cargs.push(
            "-a",
            execution.inputFile((params["absolute_volume"] ?? null))
        );
    }
    if ((params["absolute_volume_alias"] ?? null) !== null) {
        cargs.push(
            "--abs",
            execution.inputFile((params["absolute_volume_alias"] ?? null))
        );
    }
    if ((params["phase_volume"] ?? null) !== null) {
        cargs.push(
            "-p",
            execution.inputFile((params["phase_volume"] ?? null))
        );
    }
    if ((params["phase_volume_alias"] ?? null) !== null) {
        cargs.push(
            "--phase",
            execution.inputFile((params["phase_volume_alias"] ?? null))
        );
    }
    if ((params["num_phase_split"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["num_phase_split"] ?? null))
        );
    }
    if ((params["label_slices"] ?? null)) {
        cargs.push("--labelslices");
    }
    if ((params["slice_processing"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["slice_processing_alias"] ?? null)) {
        cargs.push("--slices");
    }
    if ((params["force_3d"] ?? null)) {
        cargs.push("-f");
    }
    if ((params["force_3d_alias"] ?? null)) {
        cargs.push("--force3D");
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-t",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["threshold_alias"] ?? null) !== null) {
        cargs.push(
            "--thresh",
            String((params["threshold_alias"] ?? null))
        );
    }
    if ((params["mask_volume"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_volume"] ?? null))
        );
    }
    if ((params["mask_volume_alias"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask_volume_alias"] ?? null))
        );
    }
    if ((params["start_image"] ?? null) !== null) {
        cargs.push(
            "--start",
            String((params["start_image"] ?? null))
        );
    }
    if ((params["end_image"] ?? null) !== null) {
        cargs.push(
            "--end",
            String((params["end_image"] ?? null))
        );
    }
    if ((params["save_mask"] ?? null) !== null) {
        cargs.push(
            "--savemask",
            execution.inputFile((params["save_mask"] ?? null))
        );
    }
    if ((params["save_raw_phase"] ?? null) !== null) {
        cargs.push(
            "-r",
            execution.inputFile((params["save_raw_phase"] ?? null))
        );
    }
    if ((params["save_raw_phase_alias"] ?? null) !== null) {
        cargs.push(
            "--rawphase",
            execution.inputFile((params["save_raw_phase_alias"] ?? null))
        );
    }
    if ((params["save_labels"] ?? null) !== null) {
        cargs.push(
            "-l",
            execution.inputFile((params["save_labels"] ?? null))
        );
    }
    if ((params["save_labels_alias"] ?? null) !== null) {
        cargs.push(
            "--labels",
            execution.inputFile((params["save_labels_alias"] ?? null))
        );
    }
    if ((params["remove_ramps"] ?? null)) {
        cargs.push("--removeramps");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["verbose_alias"] ?? null)) {
        cargs.push("--verbose");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["help_alias"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function prelude_outputs(
    params: PreludeParameters,
    execution: Execution,
): PreludeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PreludeOutputs = {
        root: execution.outputFile("."),
        unwrapped_phase_output: execution.outputFile([(params["output_unwrap"] ?? null), ".nii.gz"].join('')),
        saved_mask_volume: ((params["save_mask"] ?? null) !== null) ? execution.outputFile([path.basename((params["save_mask"] ?? null)), ".nii.gz"].join('')) : null,
        saved_raw_phase_output: ((params["save_raw_phase"] ?? null) !== null) ? execution.outputFile([path.basename((params["save_raw_phase"] ?? null)), ".nii.gz"].join('')) : null,
        saved_area_labels_output: ((params["save_labels"] ?? null) !== null) ? execution.outputFile([path.basename((params["save_labels"] ?? null)), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function prelude_execute(
    params: PreludeParameters,
    execution: Execution,
): PreludeOutputs {
    /**
     * Phase Region Expanding Labeller for Unwrapping Discrete Estimates.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PreludeOutputs`).
     */
    params = execution.params(params)
    const cargs = prelude_cargs(params, execution)
    const ret = prelude_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function prelude(
    output_unwrap: string,
    output_unwrap_alias: InputPathType,
    complex_phase: InputPathType | null = null,
    complex_phase_alias: InputPathType | null = null,
    absolute_volume: InputPathType | null = null,
    absolute_volume_alias: InputPathType | null = null,
    phase_volume: InputPathType | null = null,
    phase_volume_alias: InputPathType | null = null,
    num_phase_split: number | null = null,
    label_slices: boolean = false,
    slice_processing: boolean = false,
    slice_processing_alias: boolean = false,
    force_3d: boolean = false,
    force_3d_alias: boolean = false,
    threshold: number | null = null,
    threshold_alias: number | null = null,
    mask_volume: InputPathType | null = null,
    mask_volume_alias: InputPathType | null = null,
    start_image: number | null = null,
    end_image: number | null = null,
    save_mask: InputPathType | null = null,
    save_raw_phase: InputPathType | null = null,
    save_raw_phase_alias: InputPathType | null = null,
    save_labels: InputPathType | null = null,
    save_labels_alias: InputPathType | null = null,
    remove_ramps: boolean = false,
    verbose: boolean = false,
    verbose_alias: boolean = false,
    help: boolean = false,
    help_alias: boolean = false,
    runner: Runner | null = null,
): PreludeOutputs {
    /**
     * Phase Region Expanding Labeller for Unwrapping Discrete Estimates.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output_unwrap Filename for saving the unwrapped phase output
     * @param output_unwrap_alias Filename for saving the unwrapped phase output
     * @param complex_phase Filename of complex phase input volume
     * @param complex_phase_alias Filename of complex phase input volume
     * @param absolute_volume Filename of absolute input volume
     * @param absolute_volume_alias Filename of absolute input volume
     * @param phase_volume Filename of raw phase input volume
     * @param phase_volume_alias Filename of raw phase input volume
     * @param num_phase_split Number of phase partitions to use
     * @param label_slices Does label processing in 2D (slice at a time)
     * @param slice_processing Does all processing in 2D (slice at a time)
     * @param slice_processing_alias Does all processing in 2D (slice at a time)
     * @param force_3d Forces all processing to be full 3D
     * @param force_3d_alias Forces all processing to be full 3D
     * @param threshold Intensity threshold for masking
     * @param threshold_alias Intensity threshold for masking
     * @param mask_volume Filename of mask input volume
     * @param mask_volume_alias Filename of mask input volume
     * @param start_image First image number to process (default 0)
     * @param end_image Final image number to process (default Inf)
     * @param save_mask Filename for saving the mask volume
     * @param save_raw_phase Filename for saving the raw phase output
     * @param save_raw_phase_alias Filename for saving the raw phase output
     * @param save_labels Filename for saving the area labels output
     * @param save_labels_alias Filename for saving the area labels output
     * @param remove_ramps Remove phase ramps during unwrapping
     * @param verbose Switch on diagnostic messages
     * @param verbose_alias Switch on diagnostic messages
     * @param help Display help message
     * @param help_alias Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PreludeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PRELUDE_METADATA);
    const params = prelude_params(output_unwrap, output_unwrap_alias, complex_phase, complex_phase_alias, absolute_volume, absolute_volume_alias, phase_volume, phase_volume_alias, num_phase_split, label_slices, slice_processing, slice_processing_alias, force_3d, force_3d_alias, threshold, threshold_alias, mask_volume, mask_volume_alias, start_image, end_image, save_mask, save_raw_phase, save_raw_phase_alias, save_labels, save_labels_alias, remove_ramps, verbose, verbose_alias, help, help_alias)
    return prelude_execute(params, execution);
}


export {
      PRELUDE_METADATA,
      PreludeOutputs,
      PreludeParameters,
      prelude,
      prelude_params,
};
