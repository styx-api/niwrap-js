// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const T4IMGS_4DFP_METADATA: Metadata = {
    id: "ff1e1b6a51149ecedfe8127fd7944168fd2882ae.boutiques",
    name: "t4imgs_4dfp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface T4imgs4dfpParameters {
    "__STYXTYPE__": "t4imgs_4dfp";
    "sqrt_normalize": boolean;
    "cubic_spline": boolean;
    "output_nan": boolean;
    "convert_t4": boolean;
    "nearest_neighbor": boolean;
    "output_111_space": boolean;
    "output_222_space": boolean;
    "output_333n_space"?: string | null | undefined;
    "duplicate_dimensions"?: string | null | undefined;
    "big_endian": boolean;
    "little_endian": boolean;
    "input_images": Array<InputPathType>;
    "output_image": string;
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
        "t4imgs_4dfp": t4imgs_4dfp_cargs,
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
        "t4imgs_4dfp": t4imgs_4dfp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `t4imgs_4dfp(...)`.
 *
 * @interface
 */
interface T4imgs4dfpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transformed 4dfp image as output.
     */
    transformed_image: OutputPathType;
}


function t4imgs_4dfp_params(
    input_images: Array<InputPathType>,
    output_image: string,
    sqrt_normalize: boolean = false,
    cubic_spline: boolean = false,
    output_nan: boolean = false,
    convert_t4: boolean = false,
    nearest_neighbor: boolean = false,
    output_111_space: boolean = false,
    output_222_space: boolean = false,
    output_333n_space: string | null = null,
    duplicate_dimensions: string | null = null,
    big_endian: boolean = false,
    little_endian: boolean = false,
): T4imgs4dfpParameters {
    /**
     * Build parameters.
    
     * @param input_images Input list of 4dfp images.
     * @param output_image Output file name for the transformed image.
     * @param sqrt_normalize Normalize by sqrt(n) rather than n (for z images).
     * @param cubic_spline Interpolate by 3D cubic spline (default is 3D linear).
     * @param output_nan Output NaN (default 0.0) for undefined values.
     * @param convert_t4 Internally convert to_711-2A_t4->to_711-2B_t4.
     * @param nearest_neighbor Use nearest neighbor interpolation.
     * @param output_111_space Output in 111 space instead of default 333.0 space.
     * @param output_222_space Output in 222 space instead of default 333.0 space.
     * @param output_333n_space Output in 333.n space (y shifted up by n pixels).
     * @param duplicate_dimensions Duplicate dimensions of specified image.
     * @param big_endian Output in big endian format.
     * @param little_endian Output in little endian format.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "t4imgs_4dfp" as const,
        "sqrt_normalize": sqrt_normalize,
        "cubic_spline": cubic_spline,
        "output_nan": output_nan,
        "convert_t4": convert_t4,
        "nearest_neighbor": nearest_neighbor,
        "output_111_space": output_111_space,
        "output_222_space": output_222_space,
        "big_endian": big_endian,
        "little_endian": little_endian,
        "input_images": input_images,
        "output_image": output_image,
    };
    if (output_333n_space !== null) {
        params["output_333n_space"] = output_333n_space;
    }
    if (duplicate_dimensions !== null) {
        params["duplicate_dimensions"] = duplicate_dimensions;
    }
    return params;
}


function t4imgs_4dfp_cargs(
    params: T4imgs4dfpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("t4imgs_4dfp");
    if ((params["sqrt_normalize"] ?? null)) {
        cargs.push("-z");
    }
    if ((params["cubic_spline"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["output_nan"] ?? null)) {
        cargs.push("-N");
    }
    if ((params["convert_t4"] ?? null)) {
        cargs.push("-B");
    }
    if ((params["nearest_neighbor"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["output_111_space"] ?? null)) {
        cargs.push("-O111");
    }
    if ((params["output_222_space"] ?? null)) {
        cargs.push("-O222");
    }
    if ((params["output_333n_space"] ?? null) !== null) {
        cargs.push(
            "-O333.n",
            (params["output_333n_space"] ?? null)
        );
    }
    if ((params["duplicate_dimensions"] ?? null) !== null) {
        cargs.push(
            "-O",
            (params["duplicate_dimensions"] ?? null)
        );
    }
    if ((params["big_endian"] ?? null)) {
        cargs.push("-@b");
    }
    if ((params["little_endian"] ?? null)) {
        cargs.push("-@l");
    }
    cargs.push(...(params["input_images"] ?? null).map(f => execution.inputFile(f)));
    cargs.push((params["output_image"] ?? null));
    return cargs;
}


function t4imgs_4dfp_outputs(
    params: T4imgs4dfpParameters,
    execution: Execution,
): T4imgs4dfpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: T4imgs4dfpOutputs = {
        root: execution.outputFile("."),
        transformed_image: execution.outputFile([(params["output_image"] ?? null), ".4dfp.img"].join('')),
    };
    return ret;
}


function t4imgs_4dfp_execute(
    params: T4imgs4dfpParameters,
    execution: Execution,
): T4imgs4dfpOutputs {
    /**
     * Freesurfer tool for transforming images according to a specified T4 file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `T4imgs4dfpOutputs`).
     */
    params = execution.params(params)
    const cargs = t4imgs_4dfp_cargs(params, execution)
    const ret = t4imgs_4dfp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function t4imgs_4dfp(
    input_images: Array<InputPathType>,
    output_image: string,
    sqrt_normalize: boolean = false,
    cubic_spline: boolean = false,
    output_nan: boolean = false,
    convert_t4: boolean = false,
    nearest_neighbor: boolean = false,
    output_111_space: boolean = false,
    output_222_space: boolean = false,
    output_333n_space: string | null = null,
    duplicate_dimensions: string | null = null,
    big_endian: boolean = false,
    little_endian: boolean = false,
    runner: Runner | null = null,
): T4imgs4dfpOutputs {
    /**
     * Freesurfer tool for transforming images according to a specified T4 file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_images Input list of 4dfp images.
     * @param output_image Output file name for the transformed image.
     * @param sqrt_normalize Normalize by sqrt(n) rather than n (for z images).
     * @param cubic_spline Interpolate by 3D cubic spline (default is 3D linear).
     * @param output_nan Output NaN (default 0.0) for undefined values.
     * @param convert_t4 Internally convert to_711-2A_t4->to_711-2B_t4.
     * @param nearest_neighbor Use nearest neighbor interpolation.
     * @param output_111_space Output in 111 space instead of default 333.0 space.
     * @param output_222_space Output in 222 space instead of default 333.0 space.
     * @param output_333n_space Output in 333.n space (y shifted up by n pixels).
     * @param duplicate_dimensions Duplicate dimensions of specified image.
     * @param big_endian Output in big endian format.
     * @param little_endian Output in little endian format.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `T4imgs4dfpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(T4IMGS_4DFP_METADATA);
    const params = t4imgs_4dfp_params(input_images, output_image, sqrt_normalize, cubic_spline, output_nan, convert_t4, nearest_neighbor, output_111_space, output_222_space, output_333n_space, duplicate_dimensions, big_endian, little_endian)
    return t4imgs_4dfp_execute(params, execution);
}


export {
      T4IMGS_4DFP_METADATA,
      T4imgs4dfpOutputs,
      T4imgs4dfpParameters,
      t4imgs_4dfp,
      t4imgs_4dfp_params,
};
