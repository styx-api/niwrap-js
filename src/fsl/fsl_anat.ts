// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_ANAT_METADATA: Metadata = {
    id: "2843a00e8fadbec7ad493f34ea9f70cf9067b50a.boutiques",
    name: "fsl_anat",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslAnatParameters {
    "__STYXTYPE__": "fsl_anat";
    "structural_image"?: InputPathType | null | undefined;
    "existing_anat_dir"?: string | null | undefined;
    "output_dir"?: string | null | undefined;
    "clobber_flag": boolean;
    "strongbias_flag": boolean;
    "weakbias_flag": boolean;
    "noreorient_flag": boolean;
    "nocrop_flag": boolean;
    "nobias_flag": boolean;
    "noreg_flag": boolean;
    "nononlinreg_flag": boolean;
    "noseg_flag": boolean;
    "nosubcortseg_flag": boolean;
    "bias_smoothing"?: number | null | undefined;
    "image_type"?: string | null | undefined;
    "nosearch_flag": boolean;
    "bet_f_param"?: number | null | undefined;
    "nocleanup_flag": boolean;
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
        "fsl_anat": fsl_anat_cargs,
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
        "fsl_anat": fsl_anat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_anat(...)`.
 *
 * @interface
 */
interface FslAnatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output anatomical directory
     */
    output_anat_dir: OutputPathType | null;
}


function fsl_anat_params(
    structural_image: InputPathType | null = null,
    existing_anat_dir: string | null = null,
    output_dir: string | null = null,
    clobber_flag: boolean = false,
    strongbias_flag: boolean = false,
    weakbias_flag: boolean = false,
    noreorient_flag: boolean = false,
    nocrop_flag: boolean = false,
    nobias_flag: boolean = false,
    noreg_flag: boolean = false,
    nononlinreg_flag: boolean = false,
    noseg_flag: boolean = false,
    nosubcortseg_flag: boolean = false,
    bias_smoothing: number | null = null,
    image_type: string | null = null,
    nosearch_flag: boolean = false,
    bet_f_param: number | null = null,
    nocleanup_flag: boolean = false,
): FslAnatParameters {
    /**
     * Build parameters.
    
     * @param structural_image Filename of input image (for one image only)
     * @param existing_anat_dir Directory name for existing .anat directory where this script will be run in place
     * @param output_dir Basename of directory for output (default is input image basename followed by .anat)
     * @param clobber_flag If .anat directory exists (as specified by -o or default from -i) then delete it and make a new one
     * @param strongbias_flag Used for images with very strong bias fields
     * @param weakbias_flag Used for images with smoother, more typical, bias fields (default setting)
     * @param noreorient_flag Turn off step that does reorientation to standard (fslreorient2std)
     * @param nocrop_flag Turn off step that does automated cropping (robustfov)
     * @param nobias_flag Turn off steps that do bias field correction (via FAST)
     * @param noreg_flag Turn off steps that do registration to standard (FLIRT and FNIRT)
     * @param nononlinreg_flag Turn off step that does non-linear registration (FNIRT)
     * @param noseg_flag Turn off step that does tissue-type segmentation (FAST)
     * @param nosubcortseg_flag Turn off step that does sub-cortical segmentation (FIRST)
     * @param bias_smoothing Specify the value for bias field smoothing (the -l option in FAST)
     * @param image_type Specify the type of image (choose one of T1 T2 PD - default is T1)
     * @param nosearch_flag Specify that linear registration uses the -nosearch option (FLIRT)
     * @param bet_f_param Specify f parameter for BET (only used if not running non-linear reg and also wanting brain extraction done)
     * @param nocleanup_flag Do not remove intermediate files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_anat" as const,
        "clobber_flag": clobber_flag,
        "strongbias_flag": strongbias_flag,
        "weakbias_flag": weakbias_flag,
        "noreorient_flag": noreorient_flag,
        "nocrop_flag": nocrop_flag,
        "nobias_flag": nobias_flag,
        "noreg_flag": noreg_flag,
        "nononlinreg_flag": nononlinreg_flag,
        "noseg_flag": noseg_flag,
        "nosubcortseg_flag": nosubcortseg_flag,
        "nosearch_flag": nosearch_flag,
        "nocleanup_flag": nocleanup_flag,
    };
    if (structural_image !== null) {
        params["structural_image"] = structural_image;
    }
    if (existing_anat_dir !== null) {
        params["existing_anat_dir"] = existing_anat_dir;
    }
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    if (bias_smoothing !== null) {
        params["bias_smoothing"] = bias_smoothing;
    }
    if (image_type !== null) {
        params["image_type"] = image_type;
    }
    if (bet_f_param !== null) {
        params["bet_f_param"] = bet_f_param;
    }
    return params;
}


function fsl_anat_cargs(
    params: FslAnatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_anat");
    if ((params["structural_image"] ?? null) !== null) {
        cargs.push(
            "-i",
            execution.inputFile((params["structural_image"] ?? null))
        );
    }
    if ((params["existing_anat_dir"] ?? null) !== null) {
        cargs.push(
            "-d",
            (params["existing_anat_dir"] ?? null)
        );
    }
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_dir"] ?? null)
        );
    }
    if ((params["clobber_flag"] ?? null)) {
        cargs.push("--clobber");
    }
    if ((params["strongbias_flag"] ?? null)) {
        cargs.push("--strongbias");
    }
    if ((params["weakbias_flag"] ?? null)) {
        cargs.push("--weakbias");
    }
    if ((params["noreorient_flag"] ?? null)) {
        cargs.push("--noreorient");
    }
    if ((params["nocrop_flag"] ?? null)) {
        cargs.push("--nocrop");
    }
    if ((params["nobias_flag"] ?? null)) {
        cargs.push("--nobias");
    }
    if ((params["noreg_flag"] ?? null)) {
        cargs.push("--noreg");
    }
    if ((params["nononlinreg_flag"] ?? null)) {
        cargs.push("--nononlinreg");
    }
    if ((params["noseg_flag"] ?? null)) {
        cargs.push("--noseg");
    }
    if ((params["nosubcortseg_flag"] ?? null)) {
        cargs.push("--nosubcortseg");
    }
    if ((params["bias_smoothing"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["bias_smoothing"] ?? null))
        );
    }
    if ((params["image_type"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["image_type"] ?? null)
        );
    }
    if ((params["nosearch_flag"] ?? null)) {
        cargs.push("--nosearch");
    }
    if ((params["bet_f_param"] ?? null) !== null) {
        cargs.push(
            "--betfparam",
            String((params["bet_f_param"] ?? null))
        );
    }
    if ((params["nocleanup_flag"] ?? null)) {
        cargs.push("--nocleanup");
    }
    return cargs;
}


function fsl_anat_outputs(
    params: FslAnatParameters,
    execution: Execution,
): FslAnatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslAnatOutputs = {
        root: execution.outputFile("."),
        output_anat_dir: ((params["output_dir"] ?? null) !== null) ? execution.outputFile([(params["output_dir"] ?? null), ".anat"].join('')) : null,
    };
    return ret;
}


function fsl_anat_execute(
    params: FslAnatParameters,
    execution: Execution,
): FslAnatOutputs {
    /**
     * A wrapper for FSL tools to process anatomical scans.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslAnatOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_anat_cargs(params, execution)
    const ret = fsl_anat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_anat(
    structural_image: InputPathType | null = null,
    existing_anat_dir: string | null = null,
    output_dir: string | null = null,
    clobber_flag: boolean = false,
    strongbias_flag: boolean = false,
    weakbias_flag: boolean = false,
    noreorient_flag: boolean = false,
    nocrop_flag: boolean = false,
    nobias_flag: boolean = false,
    noreg_flag: boolean = false,
    nononlinreg_flag: boolean = false,
    noseg_flag: boolean = false,
    nosubcortseg_flag: boolean = false,
    bias_smoothing: number | null = null,
    image_type: string | null = null,
    nosearch_flag: boolean = false,
    bet_f_param: number | null = null,
    nocleanup_flag: boolean = false,
    runner: Runner | null = null,
): FslAnatOutputs {
    /**
     * A wrapper for FSL tools to process anatomical scans.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param structural_image Filename of input image (for one image only)
     * @param existing_anat_dir Directory name for existing .anat directory where this script will be run in place
     * @param output_dir Basename of directory for output (default is input image basename followed by .anat)
     * @param clobber_flag If .anat directory exists (as specified by -o or default from -i) then delete it and make a new one
     * @param strongbias_flag Used for images with very strong bias fields
     * @param weakbias_flag Used for images with smoother, more typical, bias fields (default setting)
     * @param noreorient_flag Turn off step that does reorientation to standard (fslreorient2std)
     * @param nocrop_flag Turn off step that does automated cropping (robustfov)
     * @param nobias_flag Turn off steps that do bias field correction (via FAST)
     * @param noreg_flag Turn off steps that do registration to standard (FLIRT and FNIRT)
     * @param nononlinreg_flag Turn off step that does non-linear registration (FNIRT)
     * @param noseg_flag Turn off step that does tissue-type segmentation (FAST)
     * @param nosubcortseg_flag Turn off step that does sub-cortical segmentation (FIRST)
     * @param bias_smoothing Specify the value for bias field smoothing (the -l option in FAST)
     * @param image_type Specify the type of image (choose one of T1 T2 PD - default is T1)
     * @param nosearch_flag Specify that linear registration uses the -nosearch option (FLIRT)
     * @param bet_f_param Specify f parameter for BET (only used if not running non-linear reg and also wanting brain extraction done)
     * @param nocleanup_flag Do not remove intermediate files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslAnatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_ANAT_METADATA);
    const params = fsl_anat_params(structural_image, existing_anat_dir, output_dir, clobber_flag, strongbias_flag, weakbias_flag, noreorient_flag, nocrop_flag, nobias_flag, noreg_flag, nononlinreg_flag, noseg_flag, nosubcortseg_flag, bias_smoothing, image_type, nosearch_flag, bet_f_param, nocleanup_flag)
    return fsl_anat_execute(params, execution);
}


export {
      FSL_ANAT_METADATA,
      FslAnatOutputs,
      FslAnatParameters,
      fsl_anat,
      fsl_anat_params,
};
