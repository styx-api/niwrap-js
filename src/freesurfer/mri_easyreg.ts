// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_EASYREG_METADATA: Metadata = {
    id: "4d4e5291ec17f7c565f30ac4c578e21520850c62.boutiques",
    name: "mri_easyreg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriEasyregParameters {
    "__STYXTYPE__": "mri_easyreg";
    "reference_image": InputPathType;
    "reference_segmentation"?: InputPathType | null | undefined;
    "floating_image": InputPathType;
    "floating_segmentation"?: InputPathType | null | undefined;
    "registered_reference"?: InputPathType | null | undefined;
    "registered_floating"?: InputPathType | null | undefined;
    "forward_field"?: InputPathType | null | undefined;
    "inverse_field"?: InputPathType | null | undefined;
    "affine_only": boolean;
    "threads"?: number | null | undefined;
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
        "mri_easyreg": mri_easyreg_cargs,
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
        "mri_easyreg": mri_easyreg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_easyreg(...)`.
 *
 * @interface
 */
interface MriEasyregOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output registered reference image
     */
    registered_reference_output: OutputPathType;
    /**
     * Output registered floating image
     */
    registered_floating_output: OutputPathType;
    /**
     * Output forward field file
     */
    forward_field_output: OutputPathType;
    /**
     * Output inverse field file
     */
    inverse_field_output: OutputPathType;
}


function mri_easyreg_params(
    reference_image: InputPathType,
    floating_image: InputPathType,
    reference_segmentation: InputPathType | null = null,
    floating_segmentation: InputPathType | null = null,
    registered_reference: InputPathType | null = null,
    registered_floating: InputPathType | null = null,
    forward_field: InputPathType | null = null,
    inverse_field: InputPathType | null = null,
    affine_only: boolean = false,
    threads: number | null = null,
): MriEasyregParameters {
    /**
     * Build parameters.
    
     * @param reference_image Reference image
     * @param floating_image Floating image
     * @param reference_segmentation Reference SynthSeg segmentation (will be created if it does not exist)
     * @param floating_segmentation Floating SynthSeg segmentation (will be created if it does not exist)
     * @param registered_reference (optional) Registered reference
     * @param registered_floating (optional) Registered floating images (in space of reference)
     * @param forward_field (optional) Forward field
     * @param inverse_field (optional) Inverse field
     * @param affine_only (optional) Skips nonlinear part
     * @param threads (optional) Number of cores to be used. Default is 1. You can use -1 to use all available cores
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_easyreg" as const,
        "reference_image": reference_image,
        "floating_image": floating_image,
        "affine_only": affine_only,
    };
    if (reference_segmentation !== null) {
        params["reference_segmentation"] = reference_segmentation;
    }
    if (floating_segmentation !== null) {
        params["floating_segmentation"] = floating_segmentation;
    }
    if (registered_reference !== null) {
        params["registered_reference"] = registered_reference;
    }
    if (registered_floating !== null) {
        params["registered_floating"] = registered_floating;
    }
    if (forward_field !== null) {
        params["forward_field"] = forward_field;
    }
    if (inverse_field !== null) {
        params["inverse_field"] = inverse_field;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function mri_easyreg_cargs(
    params: MriEasyregParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_easyreg");
    cargs.push(
        "--ref",
        execution.inputFile((params["reference_image"] ?? null))
    );
    if ((params["reference_segmentation"] ?? null) !== null) {
        cargs.push(
            "--ref_seg",
            execution.inputFile((params["reference_segmentation"] ?? null))
        );
    }
    cargs.push(
        "--flo",
        execution.inputFile((params["floating_image"] ?? null))
    );
    if ((params["floating_segmentation"] ?? null) !== null) {
        cargs.push(
            "--flo_seg",
            execution.inputFile((params["floating_segmentation"] ?? null))
        );
    }
    if ((params["registered_reference"] ?? null) !== null) {
        cargs.push(
            "--ref_reg",
            execution.inputFile((params["registered_reference"] ?? null))
        );
    }
    if ((params["registered_floating"] ?? null) !== null) {
        cargs.push(
            "--flo_reg",
            execution.inputFile((params["registered_floating"] ?? null))
        );
    }
    if ((params["forward_field"] ?? null) !== null) {
        cargs.push(
            "--fwd_field",
            execution.inputFile((params["forward_field"] ?? null))
        );
    }
    if ((params["inverse_field"] ?? null) !== null) {
        cargs.push(
            "--bak_field",
            execution.inputFile((params["inverse_field"] ?? null))
        );
    }
    if ((params["affine_only"] ?? null)) {
        cargs.push("--affine_only");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    return cargs;
}


function mri_easyreg_outputs(
    params: MriEasyregParameters,
    execution: Execution,
): MriEasyregOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriEasyregOutputs = {
        root: execution.outputFile("."),
        registered_reference_output: execution.outputFile(["registered_reference.nii.gz"].join('')),
        registered_floating_output: execution.outputFile(["registered_floating.nii.gz"].join('')),
        forward_field_output: execution.outputFile(["forward_field.nii.gz"].join('')),
        inverse_field_output: execution.outputFile(["inverse_field.nii.gz"].join('')),
    };
    return ret;
}


function mri_easyreg_execute(
    params: MriEasyregParameters,
    execution: Execution,
): MriEasyregOutputs {
    /**
     * EasyReg: deep learning registration simple and easy.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriEasyregOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_easyreg_cargs(params, execution)
    const ret = mri_easyreg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_easyreg(
    reference_image: InputPathType,
    floating_image: InputPathType,
    reference_segmentation: InputPathType | null = null,
    floating_segmentation: InputPathType | null = null,
    registered_reference: InputPathType | null = null,
    registered_floating: InputPathType | null = null,
    forward_field: InputPathType | null = null,
    inverse_field: InputPathType | null = null,
    affine_only: boolean = false,
    threads: number | null = null,
    runner: Runner | null = null,
): MriEasyregOutputs {
    /**
     * EasyReg: deep learning registration simple and easy.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param reference_image Reference image
     * @param floating_image Floating image
     * @param reference_segmentation Reference SynthSeg segmentation (will be created if it does not exist)
     * @param floating_segmentation Floating SynthSeg segmentation (will be created if it does not exist)
     * @param registered_reference (optional) Registered reference
     * @param registered_floating (optional) Registered floating images (in space of reference)
     * @param forward_field (optional) Forward field
     * @param inverse_field (optional) Inverse field
     * @param affine_only (optional) Skips nonlinear part
     * @param threads (optional) Number of cores to be used. Default is 1. You can use -1 to use all available cores
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriEasyregOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_EASYREG_METADATA);
    const params = mri_easyreg_params(reference_image, floating_image, reference_segmentation, floating_segmentation, registered_reference, registered_floating, forward_field, inverse_field, affine_only, threads)
    return mri_easyreg_execute(params, execution);
}


export {
      MRI_EASYREG_METADATA,
      MriEasyregOutputs,
      MriEasyregParameters,
      mri_easyreg,
      mri_easyreg_params,
};
