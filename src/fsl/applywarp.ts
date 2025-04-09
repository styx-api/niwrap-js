// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const APPLYWARP_METADATA: Metadata = {
    id: "90abe7c9aff74f8042b747b5f24859890e200d6e.boutiques",
    name: "applywarp",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface ApplywarpParameters {
    "__STYXTYPE__": "applywarp";
    "interp"?: "nn" | "trilinear" | "sinc" | "spline" | null | undefined;
    "in_file": InputPathType;
    "ref_file": InputPathType;
    "out_file"?: string | null | undefined;
    "relwarp": boolean;
    "abswarp": boolean;
    "datatype"?: "char" | "short" | "int" | "float" | "double" | null | undefined;
    "field_file"?: InputPathType | null | undefined;
    "mask_file"?: InputPathType | null | undefined;
    "output_type"?: "NIFTI" | "NIFTI_PAIR" | "NIFTI_GZ" | "NIFTI_PAIR_GZ" | null | undefined;
    "postmat"?: InputPathType | null | undefined;
    "premat"?: InputPathType | null | undefined;
    "superlevel"?: "a" | null | undefined;
    "superlevel_2"?: number | null | undefined;
    "supersample": boolean;
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
        "applywarp": applywarp_cargs,
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
        "applywarp": applywarp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `applywarp(...)`.
 *
 * @interface
 */
interface ApplywarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Warped output file.
     */
    out_file_outfile: OutputPathType | null;
}


function applywarp_params(
    in_file: InputPathType,
    ref_file: InputPathType,
    interp: "nn" | "trilinear" | "sinc" | "spline" | null = null,
    out_file: string | null = null,
    relwarp: boolean = false,
    abswarp: boolean = false,
    datatype: "char" | "short" | "int" | "float" | "double" | null = null,
    field_file: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    output_type: "NIFTI" | "NIFTI_PAIR" | "NIFTI_GZ" | "NIFTI_PAIR_GZ" | null = null,
    postmat: InputPathType | null = null,
    premat: InputPathType | null = null,
    superlevel: "a" | null = null,
    superlevel_2: number | null = null,
    supersample: boolean = false,
): ApplywarpParameters {
    /**
     * Build parameters.
    
     * @param in_file Image to be warped.
     * @param ref_file Reference image.
     * @param interp 'nn' or 'trilinear' or 'sinc' or 'spline'. Interpolation method.
     * @param out_file Output filename.
     * @param relwarp Treat warp field as relative: x' = x + w(x).
     * @param abswarp Treat warp field as absolute: x' = w(x).
     * @param datatype 'char' or 'short' or 'int' or 'float' or 'double'. Force output data type [char short int float double].
     * @param field_file File containing warp field.
     * @param mask_file Filename for mask image (in reference space).
     * @param output_type 'nifti' or 'nifti_pair' or 'nifti_gz' or 'nifti_pair_gz'. Fsl output type.
     * @param postmat Filename for post-transform (affine matrix).
     * @param premat Filename for pre-transform (affine matrix).
     * @param superlevel 'a' or an integer. Level of intermediary supersampling, a for 'automatic' or integer level. default = 2.
     * @param superlevel_2 'a' or an integer. Level of intermediary supersampling, a for 'automatic' or integer level. default = 2.
     * @param supersample Intermediary supersampling of output, default is off.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "applywarp" as const,
        "in_file": in_file,
        "ref_file": ref_file,
        "relwarp": relwarp,
        "abswarp": abswarp,
        "supersample": supersample,
    };
    if (interp !== null) {
        params["interp"] = interp;
    }
    if (out_file !== null) {
        params["out_file"] = out_file;
    }
    if (datatype !== null) {
        params["datatype"] = datatype;
    }
    if (field_file !== null) {
        params["field_file"] = field_file;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (output_type !== null) {
        params["output_type"] = output_type;
    }
    if (postmat !== null) {
        params["postmat"] = postmat;
    }
    if (premat !== null) {
        params["premat"] = premat;
    }
    if (superlevel !== null) {
        params["superlevel"] = superlevel;
    }
    if (superlevel_2 !== null) {
        params["superlevel_2"] = superlevel_2;
    }
    return params;
}


function applywarp_cargs(
    params: ApplywarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("applywarp");
    if ((params["interp"] ?? null) !== null) {
        cargs.push(["--interp=", (params["interp"] ?? null)].join(''));
    }
    cargs.push(["--in=", execution.inputFile((params["in_file"] ?? null))].join(''));
    cargs.push(["--ref=", execution.inputFile((params["ref_file"] ?? null))].join(''));
    if ((params["out_file"] ?? null) !== null) {
        cargs.push(["--out=", (params["out_file"] ?? null)].join(''));
    }
    if ((params["relwarp"] ?? null)) {
        cargs.push("--rel");
    }
    if ((params["abswarp"] ?? null)) {
        cargs.push("--abs");
    }
    if ((params["datatype"] ?? null) !== null) {
        cargs.push(["--datatype=", (params["datatype"] ?? null)].join(''));
    }
    if ((params["field_file"] ?? null) !== null) {
        cargs.push(["--warp=", execution.inputFile((params["field_file"] ?? null))].join(''));
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(["--mask=", execution.inputFile((params["mask_file"] ?? null))].join(''));
    }
    if ((params["output_type"] ?? null) !== null) {
        cargs.push((params["output_type"] ?? null));
    }
    if ((params["postmat"] ?? null) !== null) {
        cargs.push(["--postmat=", execution.inputFile((params["postmat"] ?? null))].join(''));
    }
    if ((params["premat"] ?? null) !== null) {
        cargs.push(["--premat=", execution.inputFile((params["premat"] ?? null))].join(''));
    }
    if ((params["superlevel"] ?? null) !== null) {
        cargs.push(["--superlevel=", (params["superlevel"] ?? null)].join(''));
    }
    if ((params["superlevel_2"] ?? null) !== null) {
        cargs.push(["--superlevel=", String((params["superlevel_2"] ?? null))].join(''));
    }
    if ((params["supersample"] ?? null)) {
        cargs.push("--super");
    }
    return cargs;
}


function applywarp_outputs(
    params: ApplywarpParameters,
    execution: Execution,
): ApplywarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ApplywarpOutputs = {
        root: execution.outputFile("."),
        out_file_outfile: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function applywarp_execute(
    params: ApplywarpParameters,
    execution: Execution,
): ApplywarpOutputs {
    /**
     * Apply warps estimated by FNIRT (or some other software) to some image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ApplywarpOutputs`).
     */
    params = execution.params(params)
    const cargs = applywarp_cargs(params, execution)
    const ret = applywarp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function applywarp(
    in_file: InputPathType,
    ref_file: InputPathType,
    interp: "nn" | "trilinear" | "sinc" | "spline" | null = null,
    out_file: string | null = null,
    relwarp: boolean = false,
    abswarp: boolean = false,
    datatype: "char" | "short" | "int" | "float" | "double" | null = null,
    field_file: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    output_type: "NIFTI" | "NIFTI_PAIR" | "NIFTI_GZ" | "NIFTI_PAIR_GZ" | null = null,
    postmat: InputPathType | null = null,
    premat: InputPathType | null = null,
    superlevel: "a" | null = null,
    superlevel_2: number | null = null,
    supersample: boolean = false,
    runner: Runner | null = null,
): ApplywarpOutputs {
    /**
     * Apply warps estimated by FNIRT (or some other software) to some image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param in_file Image to be warped.
     * @param ref_file Reference image.
     * @param interp 'nn' or 'trilinear' or 'sinc' or 'spline'. Interpolation method.
     * @param out_file Output filename.
     * @param relwarp Treat warp field as relative: x' = x + w(x).
     * @param abswarp Treat warp field as absolute: x' = w(x).
     * @param datatype 'char' or 'short' or 'int' or 'float' or 'double'. Force output data type [char short int float double].
     * @param field_file File containing warp field.
     * @param mask_file Filename for mask image (in reference space).
     * @param output_type 'nifti' or 'nifti_pair' or 'nifti_gz' or 'nifti_pair_gz'. Fsl output type.
     * @param postmat Filename for post-transform (affine matrix).
     * @param premat Filename for pre-transform (affine matrix).
     * @param superlevel 'a' or an integer. Level of intermediary supersampling, a for 'automatic' or integer level. default = 2.
     * @param superlevel_2 'a' or an integer. Level of intermediary supersampling, a for 'automatic' or integer level. default = 2.
     * @param supersample Intermediary supersampling of output, default is off.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ApplywarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(APPLYWARP_METADATA);
    const params = applywarp_params(in_file, ref_file, interp, out_file, relwarp, abswarp, datatype, field_file, mask_file, output_type, postmat, premat, superlevel, superlevel_2, supersample)
    return applywarp_execute(params, execution);
}


export {
      APPLYWARP_METADATA,
      ApplywarpOutputs,
      ApplywarpParameters,
      applywarp,
      applywarp_params,
};
