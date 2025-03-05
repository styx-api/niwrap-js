// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SSWARPER_METADATA: Metadata = {
    id: "197ce8d754dd8af8616a9982ec614230700e19aa.boutiques",
    name: "@SSwarper",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VSswarperParameters {
    "__STYXTYPE__": "@SSwarper";
    "input_file": InputPathType;
    "base_template": InputPathType;
    "subject_id": string;
    "output_dir"?: string | null | undefined;
    "min_patch_size"?: number | null | undefined;
    "no_lite": boolean;
    "skip_warp": boolean;
    "unifize_off": boolean;
    "init_skullstr_off": boolean;
    "extra_qc_off": boolean;
    "jump_to_extra_qc": boolean;
    "cost_nl_init"?: string | null | undefined;
    "cost_nl_final"?: string | null | undefined;
    "deoblique": boolean;
    "deoblique_refitly": boolean;
    "warp_scale"?: number | null | undefined;
    "ssopt_flag"?: string | null | undefined;
    "aniso_off": boolean;
    "ceil_off": boolean;
    "tmp_name_nice": boolean;
    "echo": boolean;
    "verbose": boolean;
    "noclean": boolean;
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
        "@SSwarper": v__sswarper_cargs,
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
        "@SSwarper": v__sswarper_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__sswarper(...)`.
 *
 * @interface
 */
interface VSswarperOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Deobliqued version of original dataset
     */
    anat_do: OutputPathType;
    /**
     * Intensity uniform-ized original dataset
     */
    anat_u: OutputPathType;
    /**
     * Anisotropically smoothed version of the uniformized dataset
     */
    anat_ua: OutputPathType;
    /**
     * Ceiling-capped version of the anisotropically smoothed dataset
     */
    anat_uac: OutputPathType;
    /**
     * First pass skull-stripped original dataset
     */
    anat_s: OutputPathType;
    /**
     * Second pass skull-stripped original dataset
     */
    anat_ss: OutputPathType;
    /**
     * Skull-stripped dataset nonlinearly warped to the base template space
     */
    anat_qq: OutputPathType;
    /**
     * Affine matrix to transform original dataset to base template space
     */
    anat_qq_affine: OutputPathType;
    /**
     * Incremental warp from affine transformation to nonlinearly aligned dataset
     */
    anat_qq_warp: OutputPathType;
    /**
     * 3x3 snapshot image of the nonlinearly warped dataset with edges from the base template overlaid
     */
    am_snapshot: OutputPathType;
    /**
     * Similar to AM_snapshot, but with roles of the template and anatomical dataset reversed
     */
    ma_snapshot: OutputPathType;
    /**
     * 3 rows of 8 slices snapshot image for checking alignment
     */
    qc_anat_qq: OutputPathType;
    /**
     * Snapshot image to check skullstripping in original space
     */
    qc_anat_ss: OutputPathType;
    /**
     * Montage to check initial overlap of source and base datasets
     */
    init_overlap_qc: OutputPathType;
}


function v__sswarper_params(
    input_file: InputPathType,
    base_template: InputPathType,
    subject_id: string,
    output_dir: string | null = null,
    min_patch_size: number | null = null,
    no_lite: boolean = false,
    skip_warp: boolean = false,
    unifize_off: boolean = false,
    init_skullstr_off: boolean = false,
    extra_qc_off: boolean = false,
    jump_to_extra_qc: boolean = false,
    cost_nl_init: string | null = null,
    cost_nl_final: string | null = null,
    deoblique: boolean = false,
    deoblique_refitly: boolean = false,
    warp_scale: number | null = null,
    ssopt_flag: string | null = null,
    aniso_off: boolean = false,
    ceil_off: boolean = false,
    tmp_name_nice: boolean = false,
    echo: boolean = false,
    verbose: boolean = false,
    noclean: boolean = false,
): VSswarperParameters {
    /**
     * Build parameters.
    
     * @param input_file An anatomical dataset, not skull-stripped, with about 1 mm resolution.
     * @param base_template A base template dataset with similar contrast to the input dataset.
     * @param subject_id Name code for output datasets (e.g., 'sub007').
     * @param output_dir Output directory for all files from this program.
     * @param min_patch_size Minimum patch size on final 3dQwarp.
     * @param no_lite Do not use the '-lite' option with 3dQwarp.
     * @param skip_warp Do not compute past the output of anatSS.<subid>.nii.
     * @param unifize_off Do not start with a 3dUnifize command.
     * @param init_skullstr_off Do not preprocess with a 3dSkullstrip command.
     * @param extra_qc_off Do not make extra QC images.
     * @param jump_to_extra_qc Just make the two QC*jpg images from a previous run.
     * @param cost_nl_init Specify cost function for initial nonlinear (3dQwarp) part of alignment.
     * @param cost_nl_final Specify cost function for final nonlinear (3dQwarp) parts of alignment.
     * @param deoblique Apply obliquity information to deoblique the input volume.
     * @param deoblique_refitly Purge obliquity information to deoblique the input volume.
     * @param warp_scale Control flexibility of warps in 3dQwarp.
     * @param ssopt_flag Append a string of options for 3dSkullStrip.
     * @param aniso_off Do not preprocess with a 3danisosmooth command.
     * @param ceil_off Turn off capping on values after anisosmoothing.
     * @param tmp_name_nice Use nicer, non-random intermediate file prefix for temporary files.
     * @param echo Run the script with 'set echo' for extra verbosity in the terminal output.
     * @param verbose Apply the '-verb' option to 3dQwarp for verbose progress information.
     * @param noclean Do not delete the 'junk' files at the end of computations.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@SSwarper" as const,
        "input_file": input_file,
        "base_template": base_template,
        "subject_id": subject_id,
        "no_lite": no_lite,
        "skip_warp": skip_warp,
        "unifize_off": unifize_off,
        "init_skullstr_off": init_skullstr_off,
        "extra_qc_off": extra_qc_off,
        "jump_to_extra_qc": jump_to_extra_qc,
        "deoblique": deoblique,
        "deoblique_refitly": deoblique_refitly,
        "aniso_off": aniso_off,
        "ceil_off": ceil_off,
        "tmp_name_nice": tmp_name_nice,
        "echo": echo,
        "verbose": verbose,
        "noclean": noclean,
    };
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    if (min_patch_size !== null) {
        params["min_patch_size"] = min_patch_size;
    }
    if (cost_nl_init !== null) {
        params["cost_nl_init"] = cost_nl_init;
    }
    if (cost_nl_final !== null) {
        params["cost_nl_final"] = cost_nl_final;
    }
    if (warp_scale !== null) {
        params["warp_scale"] = warp_scale;
    }
    if (ssopt_flag !== null) {
        params["ssopt_flag"] = ssopt_flag;
    }
    return params;
}


function v__sswarper_cargs(
    params: VSswarperParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@SSwarper");
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-base",
        execution.inputFile((params["base_template"] ?? null))
    );
    cargs.push(
        "-subid",
        (params["subject_id"] ?? null)
    );
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "-odir",
            (params["output_dir"] ?? null)
        );
    }
    if ((params["min_patch_size"] ?? null) !== null) {
        cargs.push(
            "-minp",
            String((params["min_patch_size"] ?? null))
        );
    }
    if ((params["no_lite"] ?? null)) {
        cargs.push("-nolite");
    }
    if ((params["skip_warp"] ?? null)) {
        cargs.push("-skipwarp");
    }
    if ((params["unifize_off"] ?? null)) {
        cargs.push("-unifize_off");
    }
    if ((params["init_skullstr_off"] ?? null)) {
        cargs.push("-init_skullstr_off");
    }
    if ((params["extra_qc_off"] ?? null)) {
        cargs.push("-extra_qc_off");
    }
    if ((params["jump_to_extra_qc"] ?? null)) {
        cargs.push("-jump_to_extra_qc");
    }
    if ((params["cost_nl_init"] ?? null) !== null) {
        cargs.push(
            "-cost_nl_init",
            (params["cost_nl_init"] ?? null)
        );
    }
    if ((params["cost_nl_final"] ?? null) !== null) {
        cargs.push(
            "-cost_nl_final",
            (params["cost_nl_final"] ?? null)
        );
    }
    if ((params["deoblique"] ?? null)) {
        cargs.push("-deoblique");
    }
    if ((params["deoblique_refitly"] ?? null)) {
        cargs.push("-deoblique_refitly");
    }
    if ((params["warp_scale"] ?? null) !== null) {
        cargs.push(
            "-warpscale",
            String((params["warp_scale"] ?? null))
        );
    }
    if ((params["ssopt_flag"] ?? null) !== null) {
        cargs.push(
            "-SSopt",
            (params["ssopt_flag"] ?? null)
        );
    }
    if ((params["aniso_off"] ?? null)) {
        cargs.push("-aniso_off");
    }
    if ((params["ceil_off"] ?? null)) {
        cargs.push("-ceil_off");
    }
    if ((params["tmp_name_nice"] ?? null)) {
        cargs.push("-tmp_name_nice");
    }
    if ((params["echo"] ?? null)) {
        cargs.push("-echo");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["noclean"] ?? null)) {
        cargs.push("-noclean");
    }
    return cargs;
}


function v__sswarper_outputs(
    params: VSswarperParameters,
    execution: Execution,
): VSswarperOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VSswarperOutputs = {
        root: execution.outputFile("."),
        anat_do: execution.outputFile(["anatDO.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_u: execution.outputFile(["anatU.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_ua: execution.outputFile(["anatUA.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_uac: execution.outputFile(["anatUAC.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_s: execution.outputFile(["anatS.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_ss: execution.outputFile(["anatSS.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_qq: execution.outputFile(["anatQQ.", (params["subject_id"] ?? null), ".nii"].join('')),
        anat_qq_affine: execution.outputFile(["anatQQ.", (params["subject_id"] ?? null), ".aff12.1D"].join('')),
        anat_qq_warp: execution.outputFile(["anatQQ.", (params["subject_id"] ?? null), "_WARP.nii"].join('')),
        am_snapshot: execution.outputFile(["AM", (params["subject_id"] ?? null), ".jpg"].join('')),
        ma_snapshot: execution.outputFile(["MA", (params["subject_id"] ?? null), ".jpg"].join('')),
        qc_anat_qq: execution.outputFile(["QC_anatQQ.", (params["subject_id"] ?? null), ".jpg"].join('')),
        qc_anat_ss: execution.outputFile(["QC_anatSS.", (params["subject_id"] ?? null), ".jpg"].join('')),
        init_overlap_qc: execution.outputFile(["init_qc_00_overlap_uinp_obase.jpg"].join('')),
    };
    return ret;
}


function v__sswarper_execute(
    params: VSswarperParameters,
    execution: Execution,
): VSswarperOutputs {
    /**
     * Dual purposes for processing a given subject's anatomical volume: skull-strip the brain and calculate the warp to a reference template/standard space.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VSswarperOutputs`).
     */
    params = execution.params(params)
    const cargs = v__sswarper_cargs(params, execution)
    const ret = v__sswarper_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__sswarper(
    input_file: InputPathType,
    base_template: InputPathType,
    subject_id: string,
    output_dir: string | null = null,
    min_patch_size: number | null = null,
    no_lite: boolean = false,
    skip_warp: boolean = false,
    unifize_off: boolean = false,
    init_skullstr_off: boolean = false,
    extra_qc_off: boolean = false,
    jump_to_extra_qc: boolean = false,
    cost_nl_init: string | null = null,
    cost_nl_final: string | null = null,
    deoblique: boolean = false,
    deoblique_refitly: boolean = false,
    warp_scale: number | null = null,
    ssopt_flag: string | null = null,
    aniso_off: boolean = false,
    ceil_off: boolean = false,
    tmp_name_nice: boolean = false,
    echo: boolean = false,
    verbose: boolean = false,
    noclean: boolean = false,
    runner: Runner | null = null,
): VSswarperOutputs {
    /**
     * Dual purposes for processing a given subject's anatomical volume: skull-strip the brain and calculate the warp to a reference template/standard space.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file An anatomical dataset, not skull-stripped, with about 1 mm resolution.
     * @param base_template A base template dataset with similar contrast to the input dataset.
     * @param subject_id Name code for output datasets (e.g., 'sub007').
     * @param output_dir Output directory for all files from this program.
     * @param min_patch_size Minimum patch size on final 3dQwarp.
     * @param no_lite Do not use the '-lite' option with 3dQwarp.
     * @param skip_warp Do not compute past the output of anatSS.<subid>.nii.
     * @param unifize_off Do not start with a 3dUnifize command.
     * @param init_skullstr_off Do not preprocess with a 3dSkullstrip command.
     * @param extra_qc_off Do not make extra QC images.
     * @param jump_to_extra_qc Just make the two QC*jpg images from a previous run.
     * @param cost_nl_init Specify cost function for initial nonlinear (3dQwarp) part of alignment.
     * @param cost_nl_final Specify cost function for final nonlinear (3dQwarp) parts of alignment.
     * @param deoblique Apply obliquity information to deoblique the input volume.
     * @param deoblique_refitly Purge obliquity information to deoblique the input volume.
     * @param warp_scale Control flexibility of warps in 3dQwarp.
     * @param ssopt_flag Append a string of options for 3dSkullStrip.
     * @param aniso_off Do not preprocess with a 3danisosmooth command.
     * @param ceil_off Turn off capping on values after anisosmoothing.
     * @param tmp_name_nice Use nicer, non-random intermediate file prefix for temporary files.
     * @param echo Run the script with 'set echo' for extra verbosity in the terminal output.
     * @param verbose Apply the '-verb' option to 3dQwarp for verbose progress information.
     * @param noclean Do not delete the 'junk' files at the end of computations.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VSswarperOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SSWARPER_METADATA);
    const params = v__sswarper_params(input_file, base_template, subject_id, output_dir, min_patch_size, no_lite, skip_warp, unifize_off, init_skullstr_off, extra_qc_off, jump_to_extra_qc, cost_nl_init, cost_nl_final, deoblique, deoblique_refitly, warp_scale, ssopt_flag, aniso_off, ceil_off, tmp_name_nice, echo, verbose, noclean)
    return v__sswarper_execute(params, execution);
}


export {
      VSswarperOutputs,
      VSswarperParameters,
      V__SSWARPER_METADATA,
      v__sswarper,
      v__sswarper_params,
};
