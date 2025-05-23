// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_SYNTHSTRIP_METADATA: Metadata = {
    id: "1bad1037e1505334c7abff4075ad10604d8b54f6.boutiques",
    name: "mri_synthstrip",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriSynthstripParameters {
    "__STYXTYPE__": "mri_synthstrip";
    "image": InputPathType;
    "output_image"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "gpu": boolean;
    "border"?: number | null | undefined;
    "exclude_csf": boolean;
    "model_weights"?: InputPathType | null | undefined;
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
        "mri_synthstrip": mri_synthstrip_cargs,
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
        "mri_synthstrip": mri_synthstrip_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_synthstrip(...)`.
 *
 * @interface
 */
interface MriSynthstripOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Stripped brain image output.
     */
    output_image_file: OutputPathType | null;
    /**
     * Binary brain mask output.
     */
    output_mask_file: OutputPathType | null;
}


function mri_synthstrip_params(
    image: InputPathType,
    output_image: string | null = null,
    mask: InputPathType | null = null,
    gpu: boolean = false,
    border: number | null = 1,
    exclude_csf: boolean = false,
    model_weights: InputPathType | null = null,
): MriSynthstripParameters {
    /**
     * Build parameters.
    
     * @param image Input image to skullstrip.
     * @param output_image Save stripped image to path.
     * @param mask Save binary brain mask to path.
     * @param gpu Use the GPU.
     * @param border Mask border threshold in mm. Default is 1.
     * @param exclude_csf Exclude CSF from brain border.
     * @param model_weights Alternative model weights.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_synthstrip" as const,
        "image": image,
        "gpu": gpu,
        "exclude_csf": exclude_csf,
    };
    if (output_image !== null) {
        params["output_image"] = output_image;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (border !== null) {
        params["border"] = border;
    }
    if (model_weights !== null) {
        params["model_weights"] = model_weights;
    }
    return params;
}


function mri_synthstrip_cargs(
    params: MriSynthstripParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_synthstrip");
    cargs.push(
        "-i",
        execution.inputFile((params["image"] ?? null))
    );
    if ((params["output_image"] ?? null) !== null) {
        cargs.push(
            "-o",
            ["[", (params["output_image"] ?? null), "]"].join('')
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            ["[", execution.inputFile((params["mask"] ?? null)), "]"].join('')
        );
    }
    if ((params["gpu"] ?? null)) {
        cargs.push(["[", "-g", "]"].join(''));
    }
    if ((params["border"] ?? null) !== null) {
        cargs.push(
            "-b",
            ["[", String((params["border"] ?? null)), "]"].join('')
        );
    }
    if ((params["exclude_csf"] ?? null)) {
        cargs.push(["[", "--no-csf", "]"].join(''));
    }
    if ((params["model_weights"] ?? null) !== null) {
        cargs.push(
            "--model",
            ["[", execution.inputFile((params["model_weights"] ?? null)), "]"].join('')
        );
    }
    return cargs;
}


function mri_synthstrip_outputs(
    params: MriSynthstripParameters,
    execution: Execution,
): MriSynthstripOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriSynthstripOutputs = {
        root: execution.outputFile("."),
        output_image_file: ((params["output_image"] ?? null) !== null) ? execution.outputFile([(params["output_image"] ?? null)].join('')) : null,
        output_mask_file: ((params["mask"] ?? null) !== null) ? execution.outputFile([path.basename((params["mask"] ?? null))].join('')) : null,
    };
    return ret;
}


function mri_synthstrip_execute(
    params: MriSynthstripParameters,
    execution: Execution,
): MriSynthstripOutputs {
    /**
     * Robust, universal skull-stripping for brain images of any type.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriSynthstripOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_synthstrip_cargs(params, execution)
    const ret = mri_synthstrip_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_synthstrip(
    image: InputPathType,
    output_image: string | null = null,
    mask: InputPathType | null = null,
    gpu: boolean = false,
    border: number | null = 1,
    exclude_csf: boolean = false,
    model_weights: InputPathType | null = null,
    runner: Runner | null = null,
): MriSynthstripOutputs {
    /**
     * Robust, universal skull-stripping for brain images of any type.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param image Input image to skullstrip.
     * @param output_image Save stripped image to path.
     * @param mask Save binary brain mask to path.
     * @param gpu Use the GPU.
     * @param border Mask border threshold in mm. Default is 1.
     * @param exclude_csf Exclude CSF from brain border.
     * @param model_weights Alternative model weights.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriSynthstripOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_SYNTHSTRIP_METADATA);
    const params = mri_synthstrip_params(image, output_image, mask, gpu, border, exclude_csf, model_weights)
    return mri_synthstrip_execute(params, execution);
}


export {
      MRI_SYNTHSTRIP_METADATA,
      MriSynthstripOutputs,
      MriSynthstripParameters,
      mri_synthstrip,
      mri_synthstrip_params,
};
