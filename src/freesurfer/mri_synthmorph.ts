// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_SYNTHMORPH_METADATA: Metadata = {
    id: "f0911d5ad2691342f07a7e7dd405c71574415a65.boutiques",
    name: "mri_synthmorph",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriSynthmorphParameters {
    "__STYXTYPE__": "mri_synthmorph";
    "moving_image": InputPathType;
    "fixed_image": InputPathType;
    "moved_output"?: string | null | undefined;
    "transform_output"?: InputPathType | null | undefined;
    "header_only": boolean;
    "transformation_model"?: "deform" | "affine" | "rigid" | null | undefined;
    "init_transform"?: InputPathType | null | undefined;
    "threads"?: number | null | undefined;
    "gpu_flag": boolean;
    "smooth"?: number | null | undefined;
    "extent"?: number | null | undefined;
    "model_weights"?: InputPathType | null | undefined;
    "inspect_directory"?: string | null | undefined;
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
        "mri_synthmorph": mri_synthmorph_cargs,
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
        "mri_synthmorph": mri_synthmorph_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_synthmorph(...)`.
 *
 * @interface
 */
interface MriSynthmorphOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The registered output image file, resulting from the operation.
     */
    moved_output_file: OutputPathType | null;
    /**
     * Transform file resulting from registration.
     */
    transform_output_file: OutputPathType;
}


function mri_synthmorph_params(
    moving_image: InputPathType,
    fixed_image: InputPathType,
    moved_output: string | null = null,
    transform_output: InputPathType | null = null,
    header_only: boolean = false,
    transformation_model: "deform" | "affine" | "rigid" | null = "deform",
    init_transform: InputPathType | null = null,
    threads: number | null = null,
    gpu_flag: boolean = false,
    smooth: number | null = 1,
    extent: number | null = 256,
    model_weights: InputPathType | null = null,
    inspect_directory: string | null = null,
): MriSynthmorphParameters {
    /**
     * Build parameters.
    
     * @param moving_image The moving input image, which will be registered to the fixed image.
     * @param fixed_image The fixed input image, which is used as the reference for registration.
     * @param moved_output The resulting image after registration.
     * @param transform_output Output transform file for registration. Can be a text file for linear or an image file for deformable registration.
     * @param header_only Adjust the voxel-to-world matrix instead of resampling. Linear registration only.
     * @param transformation_model Specifies the registration transformation model. Options include 'deform', 'affine', and 'rigid'.
     * @param init_transform Initial linear transform for registration.
     * @param threads Number of TensorFlow threads to utilize. Defaults to the number of cores.
     * @param gpu_flag Utilize the GPU specified by CUDA_VISIBLE_DEVICES or GPU 0 if unset or empty.
     * @param smooth Regularization parameter for deformable registration. Higher values indicate smoother displacement fields.
     * @param extent Isotropic extent of the registration space in unit voxels.
     * @param model_weights Alternative model weights as an H5 file.
     * @param inspect_directory Save model inputs resampled into network space for inspection.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_synthmorph" as const,
        "moving_image": moving_image,
        "fixed_image": fixed_image,
        "header_only": header_only,
        "gpu_flag": gpu_flag,
    };
    if (moved_output !== null) {
        params["moved_output"] = moved_output;
    }
    if (transform_output !== null) {
        params["transform_output"] = transform_output;
    }
    if (transformation_model !== null) {
        params["transformation_model"] = transformation_model;
    }
    if (init_transform !== null) {
        params["init_transform"] = init_transform;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (smooth !== null) {
        params["smooth"] = smooth;
    }
    if (extent !== null) {
        params["extent"] = extent;
    }
    if (model_weights !== null) {
        params["model_weights"] = model_weights;
    }
    if (inspect_directory !== null) {
        params["inspect_directory"] = inspect_directory;
    }
    return params;
}


function mri_synthmorph_cargs(
    params: MriSynthmorphParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_synthmorph");
    cargs.push(execution.inputFile((params["moving_image"] ?? null)));
    cargs.push(execution.inputFile((params["fixed_image"] ?? null)));
    if ((params["moved_output"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["moved_output"] ?? null)
        );
    }
    if ((params["transform_output"] ?? null) !== null) {
        cargs.push(
            "-t",
            execution.inputFile((params["transform_output"] ?? null))
        );
    }
    if ((params["header_only"] ?? null)) {
        cargs.push("-H");
    }
    if ((params["transformation_model"] ?? null) !== null) {
        cargs.push(
            "-m",
            (params["transformation_model"] ?? null)
        );
    }
    if ((params["init_transform"] ?? null) !== null) {
        cargs.push(
            "-i",
            execution.inputFile((params["init_transform"] ?? null))
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "-j",
            String((params["threads"] ?? null))
        );
    }
    if ((params["gpu_flag"] ?? null)) {
        cargs.push("-g");
    }
    if ((params["smooth"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["smooth"] ?? null))
        );
    }
    if ((params["extent"] ?? null) !== null) {
        cargs.push(
            "-e",
            String((params["extent"] ?? null))
        );
    }
    if ((params["model_weights"] ?? null) !== null) {
        cargs.push(
            "-w",
            execution.inputFile((params["model_weights"] ?? null))
        );
    }
    if ((params["inspect_directory"] ?? null) !== null) {
        cargs.push(
            "--inspect",
            (params["inspect_directory"] ?? null)
        );
    }
    return cargs;
}


function mri_synthmorph_outputs(
    params: MriSynthmorphParameters,
    execution: Execution,
): MriSynthmorphOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriSynthmorphOutputs = {
        root: execution.outputFile("."),
        moved_output_file: ((params["moved_output"] ?? null) !== null) ? execution.outputFile([(params["moved_output"] ?? null)].join('')) : null,
        transform_output_file: execution.outputFile(["[TRANS_OUTPUT]"].join('')),
    };
    return ret;
}


function mri_synthmorph_execute(
    params: MriSynthmorphParameters,
    execution: Execution,
): MriSynthmorphOutputs {
    /**
     * SynthMorph is a deep-learning tool for brain-specific MRI image registration without preprocessing.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriSynthmorphOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_synthmorph_cargs(params, execution)
    const ret = mri_synthmorph_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_synthmorph(
    moving_image: InputPathType,
    fixed_image: InputPathType,
    moved_output: string | null = null,
    transform_output: InputPathType | null = null,
    header_only: boolean = false,
    transformation_model: "deform" | "affine" | "rigid" | null = "deform",
    init_transform: InputPathType | null = null,
    threads: number | null = null,
    gpu_flag: boolean = false,
    smooth: number | null = 1,
    extent: number | null = 256,
    model_weights: InputPathType | null = null,
    inspect_directory: string | null = null,
    runner: Runner | null = null,
): MriSynthmorphOutputs {
    /**
     * SynthMorph is a deep-learning tool for brain-specific MRI image registration without preprocessing.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param moving_image The moving input image, which will be registered to the fixed image.
     * @param fixed_image The fixed input image, which is used as the reference for registration.
     * @param moved_output The resulting image after registration.
     * @param transform_output Output transform file for registration. Can be a text file for linear or an image file for deformable registration.
     * @param header_only Adjust the voxel-to-world matrix instead of resampling. Linear registration only.
     * @param transformation_model Specifies the registration transformation model. Options include 'deform', 'affine', and 'rigid'.
     * @param init_transform Initial linear transform for registration.
     * @param threads Number of TensorFlow threads to utilize. Defaults to the number of cores.
     * @param gpu_flag Utilize the GPU specified by CUDA_VISIBLE_DEVICES or GPU 0 if unset or empty.
     * @param smooth Regularization parameter for deformable registration. Higher values indicate smoother displacement fields.
     * @param extent Isotropic extent of the registration space in unit voxels.
     * @param model_weights Alternative model weights as an H5 file.
     * @param inspect_directory Save model inputs resampled into network space for inspection.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriSynthmorphOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_SYNTHMORPH_METADATA);
    const params = mri_synthmorph_params(moving_image, fixed_image, moved_output, transform_output, header_only, transformation_model, init_transform, threads, gpu_flag, smooth, extent, model_weights, inspect_directory)
    return mri_synthmorph_execute(params, execution);
}


export {
      MRI_SYNTHMORPH_METADATA,
      MriSynthmorphOutputs,
      MriSynthmorphParameters,
      mri_synthmorph,
      mri_synthmorph_params,
};
