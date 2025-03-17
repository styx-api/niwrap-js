// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MIDEFACE_METADATA: Metadata = {
    id: "e4a7d1cf3f8f93ccdd73f64b12dba5ce0fe4110b.boutiques",
    name: "mideface",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MidefaceParameters {
    "__STYXTYPE__": "mideface";
    "input_volume": InputPathType;
    "output_volume": string;
    "facemask"?: InputPathType | null | undefined;
    "output_dir"?: string | null | undefined;
    "exclusion_mask"?: InputPathType | null | undefined;
    "samseg_ndilations"?: number | null | undefined;
    "samseg_json"?: string | null | undefined;
    "samseg_fast": boolean;
    "no_samseg_fast": boolean;
    "init_reg"?: InputPathType | null | undefined;
    "synthseg_ndilations"?: number | null | undefined;
    "fill_const"?: Array<number> | null | undefined;
    "fill_zero": boolean;
    "fhi"?: number | null | undefined;
    "no_ears": boolean;
    "back_of_head": boolean;
    "forehead": boolean;
    "pics": boolean;
    "code"?: string | null | undefined;
    "image_convert"?: string | null | undefined;
    "no_post": boolean;
    "threads"?: number | null | undefined;
    "force": boolean;
    "output_format"?: string | null | undefined;
    "atlas"?: string | null | undefined;
    "expert"?: string | null | undefined;
    "display_no"?: number | null | undefined;
    "apply_volume"?: string | null | undefined;
    "check_volume"?: InputPathType | null | undefined;
    "check_output_file"?: InputPathType | null | undefined;
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
        "mideface": mideface_cargs,
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
        "mideface": mideface_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mideface(...)`.
 *
 * @interface
 */
interface MidefaceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Defaced output volume
     */
    defaced_output: OutputPathType;
    /**
     * Applied facemask file
     */
    facemask_output: OutputPathType | null;
}


function mideface_params(
    input_volume: InputPathType,
    output_volume: string,
    facemask: InputPathType | null = null,
    output_dir: string | null = null,
    exclusion_mask: InputPathType | null = null,
    samseg_ndilations: number | null = null,
    samseg_json: string | null = null,
    samseg_fast: boolean = false,
    no_samseg_fast: boolean = false,
    init_reg: InputPathType | null = null,
    synthseg_ndilations: number | null = null,
    fill_const: Array<number> | null = null,
    fill_zero: boolean = false,
    fhi: number | null = null,
    no_ears: boolean = false,
    back_of_head: boolean = false,
    forehead: boolean = false,
    pics: boolean = false,
    code: string | null = null,
    image_convert: string | null = null,
    no_post: boolean = false,
    threads: number | null = null,
    force: boolean = false,
    output_format: string | null = null,
    atlas: string | null = null,
    expert: string | null = null,
    display_no: number | null = null,
    apply_volume: string | null = null,
    check_volume: InputPathType | null = null,
    check_output_file: InputPathType | null = null,
): MidefaceParameters {
    /**
     * Build parameters.
    
     * @param input_volume Volume to deface
     * @param output_volume Defaced output volume
     * @param facemask Facemask to apply
     * @param output_dir Directory for outputs, activates PostHeadSurf
     * @param exclusion_mask Mask to exclude certain regions from defacing
     * @param samseg_ndilations Number of dilations for Samseg segmentation
     * @param samseg_json JSON configuration for Samseg
     * @param samseg_fast Configure Samseg to run quickly
     * @param no_samseg_fast Do not configure Samseg to run quickly
     * @param init_reg Initial registration file for Samseg
     * @param synthseg_ndilations Number of dilations for Synthseg segmentation
     * @param fill_const Constants for filling regions
     * @param fill_zero Fill regions with zero
     * @param fhi FHI value for MRIchangeType()
     * @param no_ears Do not include ears in the defacing
     * @param back_of_head Include back of head in defacing
     * @param forehead Include forehead in defacing (risks removing brain)
     * @param pics Take pictures of the defaced result
     * @param code Embed code name in pictures
     * @param image_convert Path to ImageMagick convert binary for pictures
     * @param no_post Do not make a head surface after defacing
     * @param threads Number of threads to use
     * @param force Force reprocessing (only applicable if output directory is used)
     * @param output_format Output file format
     * @param atlas Directory containing atlas files
     * @param expert Additional expert options
     * @param display_no Xvfb display number for taking pictures
     * @param apply_volume Apply midface output to a second volume
     * @param check_volume Volume to check if defaced
     * @param check_output_file Optional output file for check result
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mideface" as const,
        "input_volume": input_volume,
        "output_volume": output_volume,
        "samseg_fast": samseg_fast,
        "no_samseg_fast": no_samseg_fast,
        "fill_zero": fill_zero,
        "no_ears": no_ears,
        "back_of_head": back_of_head,
        "forehead": forehead,
        "pics": pics,
        "no_post": no_post,
        "force": force,
    };
    if (facemask !== null) {
        params["facemask"] = facemask;
    }
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    if (exclusion_mask !== null) {
        params["exclusion_mask"] = exclusion_mask;
    }
    if (samseg_ndilations !== null) {
        params["samseg_ndilations"] = samseg_ndilations;
    }
    if (samseg_json !== null) {
        params["samseg_json"] = samseg_json;
    }
    if (init_reg !== null) {
        params["init_reg"] = init_reg;
    }
    if (synthseg_ndilations !== null) {
        params["synthseg_ndilations"] = synthseg_ndilations;
    }
    if (fill_const !== null) {
        params["fill_const"] = fill_const;
    }
    if (fhi !== null) {
        params["fhi"] = fhi;
    }
    if (code !== null) {
        params["code"] = code;
    }
    if (image_convert !== null) {
        params["image_convert"] = image_convert;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (output_format !== null) {
        params["output_format"] = output_format;
    }
    if (atlas !== null) {
        params["atlas"] = atlas;
    }
    if (expert !== null) {
        params["expert"] = expert;
    }
    if (display_no !== null) {
        params["display_no"] = display_no;
    }
    if (apply_volume !== null) {
        params["apply_volume"] = apply_volume;
    }
    if (check_volume !== null) {
        params["check_volume"] = check_volume;
    }
    if (check_output_file !== null) {
        params["check_output_file"] = check_output_file;
    }
    return params;
}


function mideface_cargs(
    params: MidefaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mideface");
    cargs.push(
        "--i",
        execution.inputFile((params["input_volume"] ?? null))
    );
    cargs.push(
        "--o",
        (params["output_volume"] ?? null)
    );
    if ((params["facemask"] ?? null) !== null) {
        cargs.push(
            "--facemask",
            execution.inputFile((params["facemask"] ?? null))
        );
    }
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "--odir",
            (params["output_dir"] ?? null)
        );
    }
    if ((params["exclusion_mask"] ?? null) !== null) {
        cargs.push(
            "--xmask",
            execution.inputFile((params["exclusion_mask"] ?? null))
        );
    }
    if ((params["samseg_ndilations"] ?? null) !== null) {
        cargs.push(
            "--xmask-samseg",
            String((params["samseg_ndilations"] ?? null))
        );
    }
    if ((params["samseg_json"] ?? null) !== null) {
        cargs.push(
            "--samseg-json",
            (params["samseg_json"] ?? null)
        );
    }
    if ((params["samseg_fast"] ?? null)) {
        cargs.push("--samseg-fast");
    }
    if ((params["no_samseg_fast"] ?? null)) {
        cargs.push("--no-samseg-fast");
    }
    if ((params["init_reg"] ?? null) !== null) {
        cargs.push(
            "--init-reg",
            execution.inputFile((params["init_reg"] ?? null))
        );
    }
    if ((params["synthseg_ndilations"] ?? null) !== null) {
        cargs.push(
            "--xmask-synthseg",
            String((params["synthseg_ndilations"] ?? null))
        );
    }
    if ((params["fill_const"] ?? null) !== null) {
        cargs.push(
            "--fill-const",
            ...(params["fill_const"] ?? null).map(String)
        );
    }
    if ((params["fill_zero"] ?? null)) {
        cargs.push("--fill-zero");
    }
    if ((params["fhi"] ?? null) !== null) {
        cargs.push(
            "--fhi",
            String((params["fhi"] ?? null))
        );
    }
    if ((params["no_ears"] ?? null)) {
        cargs.push("--no-ears");
    }
    if ((params["back_of_head"] ?? null)) {
        cargs.push("--back-of-head");
    }
    if ((params["forehead"] ?? null)) {
        cargs.push("--forehead");
    }
    if ((params["pics"] ?? null)) {
        cargs.push("--pics");
    }
    if ((params["code"] ?? null) !== null) {
        cargs.push(
            "--code",
            (params["code"] ?? null)
        );
    }
    if ((params["image_convert"] ?? null) !== null) {
        cargs.push(
            "--imconvert",
            (params["image_convert"] ?? null)
        );
    }
    if ((params["no_post"] ?? null)) {
        cargs.push("--no-post");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["force"] ?? null)) {
        cargs.push("--force");
    }
    if ((params["output_format"] ?? null) !== null) {
        cargs.push(
            "--nii --nii.gz --mgz",
            (params["output_format"] ?? null)
        );
    }
    if ((params["atlas"] ?? null) !== null) {
        cargs.push(
            "--atlas",
            (params["atlas"] ?? null)
        );
    }
    if ((params["expert"] ?? null) !== null) {
        cargs.push(
            "--expert",
            (params["expert"] ?? null)
        );
    }
    if ((params["display_no"] ?? null) !== null) {
        cargs.push(
            "--display",
            String((params["display_no"] ?? null))
        );
    }
    if ((params["apply_volume"] ?? null) !== null) {
        cargs.push(
            "--apply",
            (params["apply_volume"] ?? null)
        );
    }
    if ((params["check_volume"] ?? null) !== null) {
        cargs.push(
            "--check",
            execution.inputFile((params["check_volume"] ?? null))
        );
    }
    if ((params["check_output_file"] ?? null) !== null) {
        cargs.push(
            "--check",
            execution.inputFile((params["check_output_file"] ?? null))
        );
    }
    return cargs;
}


function mideface_outputs(
    params: MidefaceParameters,
    execution: Execution,
): MidefaceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MidefaceOutputs = {
        root: execution.outputFile("."),
        defaced_output: execution.outputFile([(params["output_volume"] ?? null)].join('')),
        facemask_output: ((params["facemask"] ?? null) !== null) ? execution.outputFile([path.basename((params["facemask"] ?? null))].join('')) : null,
    };
    return ret;
}


function mideface_execute(
    params: MidefaceParameters,
    execution: Execution,
): MidefaceOutputs {
    /**
     * Minimally invasive defacing tool.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MidefaceOutputs`).
     */
    params = execution.params(params)
    const cargs = mideface_cargs(params, execution)
    const ret = mideface_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mideface(
    input_volume: InputPathType,
    output_volume: string,
    facemask: InputPathType | null = null,
    output_dir: string | null = null,
    exclusion_mask: InputPathType | null = null,
    samseg_ndilations: number | null = null,
    samseg_json: string | null = null,
    samseg_fast: boolean = false,
    no_samseg_fast: boolean = false,
    init_reg: InputPathType | null = null,
    synthseg_ndilations: number | null = null,
    fill_const: Array<number> | null = null,
    fill_zero: boolean = false,
    fhi: number | null = null,
    no_ears: boolean = false,
    back_of_head: boolean = false,
    forehead: boolean = false,
    pics: boolean = false,
    code: string | null = null,
    image_convert: string | null = null,
    no_post: boolean = false,
    threads: number | null = null,
    force: boolean = false,
    output_format: string | null = null,
    atlas: string | null = null,
    expert: string | null = null,
    display_no: number | null = null,
    apply_volume: string | null = null,
    check_volume: InputPathType | null = null,
    check_output_file: InputPathType | null = null,
    runner: Runner | null = null,
): MidefaceOutputs {
    /**
     * Minimally invasive defacing tool.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Volume to deface
     * @param output_volume Defaced output volume
     * @param facemask Facemask to apply
     * @param output_dir Directory for outputs, activates PostHeadSurf
     * @param exclusion_mask Mask to exclude certain regions from defacing
     * @param samseg_ndilations Number of dilations for Samseg segmentation
     * @param samseg_json JSON configuration for Samseg
     * @param samseg_fast Configure Samseg to run quickly
     * @param no_samseg_fast Do not configure Samseg to run quickly
     * @param init_reg Initial registration file for Samseg
     * @param synthseg_ndilations Number of dilations for Synthseg segmentation
     * @param fill_const Constants for filling regions
     * @param fill_zero Fill regions with zero
     * @param fhi FHI value for MRIchangeType()
     * @param no_ears Do not include ears in the defacing
     * @param back_of_head Include back of head in defacing
     * @param forehead Include forehead in defacing (risks removing brain)
     * @param pics Take pictures of the defaced result
     * @param code Embed code name in pictures
     * @param image_convert Path to ImageMagick convert binary for pictures
     * @param no_post Do not make a head surface after defacing
     * @param threads Number of threads to use
     * @param force Force reprocessing (only applicable if output directory is used)
     * @param output_format Output file format
     * @param atlas Directory containing atlas files
     * @param expert Additional expert options
     * @param display_no Xvfb display number for taking pictures
     * @param apply_volume Apply midface output to a second volume
     * @param check_volume Volume to check if defaced
     * @param check_output_file Optional output file for check result
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MidefaceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MIDEFACE_METADATA);
    const params = mideface_params(input_volume, output_volume, facemask, output_dir, exclusion_mask, samseg_ndilations, samseg_json, samseg_fast, no_samseg_fast, init_reg, synthseg_ndilations, fill_const, fill_zero, fhi, no_ears, back_of_head, forehead, pics, code, image_convert, no_post, threads, force, output_format, atlas, expert, display_no, apply_volume, check_volume, check_output_file)
    return mideface_execute(params, execution);
}


export {
      MIDEFACE_METADATA,
      MidefaceOutputs,
      MidefaceParameters,
      mideface,
      mideface_params,
};
