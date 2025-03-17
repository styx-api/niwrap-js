// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAP_CENTRAL_SULCUS_METADATA: Metadata = {
    id: "516b76e8b1ac8749a680661e63215cc41d8c82f4.boutiques",
    name: "map_central_sulcus",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MapCentralSulcusParameters {
    "__STYXTYPE__": "map_central_sulcus";
    "subjid": string;
    "process_directive": string;
    "hemi_flag"?: string | null | undefined;
    "expert_prefs_file"?: InputPathType | null | undefined;
    "xopts_use": boolean;
    "xopts_clean": boolean;
    "xopts_overwrite": boolean;
    "watershed_cmd"?: string | null | undefined;
    "xmask_file"?: InputPathType | null | undefined;
    "wsless": boolean;
    "wsmore": boolean;
    "wsatlas": boolean;
    "no_wsatlas": boolean;
    "no_wsgcaatlas": boolean;
    "wsthresh"?: number | null | undefined;
    "wsseed"?: string | null | undefined;
    "norm3diters"?: number | null | undefined;
    "normmaxgrad"?: number | null | undefined;
    "norm1_b"?: number | null | undefined;
    "norm2_b"?: number | null | undefined;
    "norm1_n"?: number | null | undefined;
    "norm2_n"?: number | null | undefined;
    "cm_flag": boolean;
    "no_fix_with_ga": boolean;
    "fix_diag_only": boolean;
    "seg_wlo"?: number | null | undefined;
    "seg_ghi"?: number | null | undefined;
    "nothicken": boolean;
    "no_ca_align_after": boolean;
    "no_ca_align": boolean;
    "deface": boolean;
    "mprage": boolean;
    "washu_mprage": boolean;
    "schwartzya3t_atlas": boolean;
    "mail_username"?: string | null | undefined;
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
        "map_central_sulcus": map_central_sulcus_cargs,
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
        "map_central_sulcus": map_central_sulcus_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `map_central_sulcus(...)`.
 *
 * @interface
 */
interface MapCentralSulcusOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Log file from recon-all process.
     */
    log_file: OutputPathType;
    /**
     * Status log file from recon-all process.
     */
    status_log_file: OutputPathType;
}


function map_central_sulcus_params(
    subjid: string,
    process_directive: string,
    hemi_flag: string | null = null,
    expert_prefs_file: InputPathType | null = null,
    xopts_use: boolean = false,
    xopts_clean: boolean = false,
    xopts_overwrite: boolean = false,
    watershed_cmd: string | null = null,
    xmask_file: InputPathType | null = null,
    wsless: boolean = false,
    wsmore: boolean = false,
    wsatlas: boolean = false,
    no_wsatlas: boolean = false,
    no_wsgcaatlas: boolean = false,
    wsthresh: number | null = null,
    wsseed: string | null = null,
    norm3diters: number | null = null,
    normmaxgrad: number | null = null,
    norm1_b: number | null = null,
    norm2_b: number | null = null,
    norm1_n: number | null = null,
    norm2_n: number | null = null,
    cm_flag: boolean = false,
    no_fix_with_ga: boolean = false,
    fix_diag_only: boolean = false,
    seg_wlo: number | null = null,
    seg_ghi: number | null = null,
    nothicken: boolean = false,
    no_ca_align_after: boolean = false,
    no_ca_align: boolean = false,
    deface: boolean = false,
    mprage: boolean = false,
    washu_mprage: boolean = false,
    schwartzya3t_atlas: boolean = false,
    mail_username: string | null = null,
    threads: number | null = null,
): MapCentralSulcusParameters {
    /**
     * Build parameters.
    
     * @param subjid FreeSurfer subject identification string which doubles as the name of the reconstruction root directory for the subject.
     * @param process_directive Process directive for recon-all (e.g. -all, -autorecon-all, -autorecon1)
     * @param hemi_flag Specify hemisphere processing (e.g., lh for left hemisphere or rh for right hemisphere)
     * @param expert_prefs_file Read-in expert options file for processing. Overrides default options.
     * @param xopts_use Use pre-existing expert options file.
     * @param xopts_clean Delete pre-existing expert options file.
     * @param xopts_overwrite Overwrite pre-existing expert options file.
     * @param watershed_cmd Controls how the skull stripping will be performed.
     * @param xmask_file Custom external brain mask to replace automated skullstripping.
     * @param wsless Decrease watershed threshold (leaves less skull, but can strip more brain).
     * @param wsmore Increase watershed threshold (leaves more skull, but can strip less brain).
     * @param wsatlas Use atlas when skull stripping.
     * @param no_wsatlas Do not use atlas when skull stripping.
     * @param no_wsgcaatlas Do not use GCA atlas when skull stripping.
     * @param wsthresh Explicitly set watershed threshold.
     * @param wsseed Specify an index (C, R, S) point in the skull.
     * @param norm3diters Number of 3d iterations for mri_normalize.
     * @param normmaxgrad Max grad (-g) for mri_normalize. Default is 1.
     * @param norm1_b In the first usage of mri_normalize, use control point with intensity N below target (default=10.0).
     * @param norm2_b In the second usage of mri_normalize, use control point with intensity N below target (default=10.0).
     * @param norm1_n In the first usage of mri_normalize, do N number of iterations.
     * @param norm2_n In the second usage of mri_normalize, do N number of iterations.
     * @param cm_flag Conform volumes to the min voxel size.
     * @param no_fix_with_ga Do not use genetic algorithm when fixing topology.
     * @param fix_diag_only Topology fixer runs until ?h.defect_labels files are created, then stops.
     * @param seg_wlo Set wlo value for mri_segment and mris_make_surfaces.
     * @param seg_ghi Set ghi value for mri_segment and mris_make_surfaces.
     * @param nothicken Pass '-thicken 0' to mri_segment.
     * @param no_ca_align_after Turn off -align-after with mri_ca_register.
     * @param no_ca_align Turn off -align with mri_ca_label.
     * @param deface Deface subject, written to orig_defaced.mgz.
     * @param mprage Assume scan parameters are MGH MP-RAGE protocol.
     * @param washu_mprage Assume scan parameters are Wash.U. MP-RAGE protocol.
     * @param schwartzya3t_atlas For tal reg, use special young adult 3T atlas.
     * @param mail_username Mail user when done.
     * @param threads Set number of threads to use.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "map_central_sulcus" as const,
        "subjid": subjid,
        "process_directive": process_directive,
        "xopts_use": xopts_use,
        "xopts_clean": xopts_clean,
        "xopts_overwrite": xopts_overwrite,
        "wsless": wsless,
        "wsmore": wsmore,
        "wsatlas": wsatlas,
        "no_wsatlas": no_wsatlas,
        "no_wsgcaatlas": no_wsgcaatlas,
        "cm_flag": cm_flag,
        "no_fix_with_ga": no_fix_with_ga,
        "fix_diag_only": fix_diag_only,
        "nothicken": nothicken,
        "no_ca_align_after": no_ca_align_after,
        "no_ca_align": no_ca_align,
        "deface": deface,
        "mprage": mprage,
        "washu_mprage": washu_mprage,
        "schwartzya3t_atlas": schwartzya3t_atlas,
    };
    if (hemi_flag !== null) {
        params["hemi_flag"] = hemi_flag;
    }
    if (expert_prefs_file !== null) {
        params["expert_prefs_file"] = expert_prefs_file;
    }
    if (watershed_cmd !== null) {
        params["watershed_cmd"] = watershed_cmd;
    }
    if (xmask_file !== null) {
        params["xmask_file"] = xmask_file;
    }
    if (wsthresh !== null) {
        params["wsthresh"] = wsthresh;
    }
    if (wsseed !== null) {
        params["wsseed"] = wsseed;
    }
    if (norm3diters !== null) {
        params["norm3diters"] = norm3diters;
    }
    if (normmaxgrad !== null) {
        params["normmaxgrad"] = normmaxgrad;
    }
    if (norm1_b !== null) {
        params["norm1_b"] = norm1_b;
    }
    if (norm2_b !== null) {
        params["norm2_b"] = norm2_b;
    }
    if (norm1_n !== null) {
        params["norm1_n"] = norm1_n;
    }
    if (norm2_n !== null) {
        params["norm2_n"] = norm2_n;
    }
    if (seg_wlo !== null) {
        params["seg_wlo"] = seg_wlo;
    }
    if (seg_ghi !== null) {
        params["seg_ghi"] = seg_ghi;
    }
    if (mail_username !== null) {
        params["mail_username"] = mail_username;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function map_central_sulcus_cargs(
    params: MapCentralSulcusParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("map_central_sulcus");
    cargs.push(
        "-subjid",
        (params["subjid"] ?? null)
    );
    cargs.push((params["process_directive"] ?? null));
    if ((params["hemi_flag"] ?? null) !== null) {
        cargs.push(
            "-hemi",
            (params["hemi_flag"] ?? null)
        );
    }
    if ((params["expert_prefs_file"] ?? null) !== null) {
        cargs.push(
            "-expert",
            execution.inputFile((params["expert_prefs_file"] ?? null))
        );
    }
    if ((params["xopts_use"] ?? null)) {
        cargs.push("-xopts-use");
    }
    if ((params["xopts_clean"] ?? null)) {
        cargs.push("-xopts-clean");
    }
    if ((params["xopts_overwrite"] ?? null)) {
        cargs.push("-xopts-overwrite");
    }
    if ((params["watershed_cmd"] ?? null) !== null) {
        cargs.push(
            "-watershed",
            (params["watershed_cmd"] ?? null)
        );
    }
    if ((params["xmask_file"] ?? null) !== null) {
        cargs.push(
            "-xmask",
            execution.inputFile((params["xmask_file"] ?? null))
        );
    }
    if ((params["wsless"] ?? null)) {
        cargs.push("-wsless");
    }
    if ((params["wsmore"] ?? null)) {
        cargs.push("-wsmore");
    }
    if ((params["wsatlas"] ?? null)) {
        cargs.push("-wsatlas");
    }
    if ((params["no_wsatlas"] ?? null)) {
        cargs.push("-no-wsatlas");
    }
    if ((params["no_wsgcaatlas"] ?? null)) {
        cargs.push("-no-wsgcaatlas");
    }
    if ((params["wsthresh"] ?? null) !== null) {
        cargs.push(
            "-wsthresh",
            String((params["wsthresh"] ?? null))
        );
    }
    if ((params["wsseed"] ?? null) !== null) {
        cargs.push(
            "-wsseed",
            (params["wsseed"] ?? null)
        );
    }
    if ((params["norm3diters"] ?? null) !== null) {
        cargs.push(
            "-norm3diters",
            String((params["norm3diters"] ?? null))
        );
    }
    if ((params["normmaxgrad"] ?? null) !== null) {
        cargs.push(
            "-normmaxgrad",
            String((params["normmaxgrad"] ?? null))
        );
    }
    if ((params["norm1_b"] ?? null) !== null) {
        cargs.push(
            "-norm1-b",
            String((params["norm1_b"] ?? null))
        );
    }
    if ((params["norm2_b"] ?? null) !== null) {
        cargs.push(
            "-norm2-b",
            String((params["norm2_b"] ?? null))
        );
    }
    if ((params["norm1_n"] ?? null) !== null) {
        cargs.push(
            "-norm1-n",
            String((params["norm1_n"] ?? null))
        );
    }
    if ((params["norm2_n"] ?? null) !== null) {
        cargs.push(
            "-norm2-n",
            String((params["norm2_n"] ?? null))
        );
    }
    if ((params["cm_flag"] ?? null)) {
        cargs.push("-cm");
    }
    if ((params["no_fix_with_ga"] ?? null)) {
        cargs.push("-no-fix-with-ga");
    }
    if ((params["fix_diag_only"] ?? null)) {
        cargs.push("-fix-diag-only");
    }
    if ((params["seg_wlo"] ?? null) !== null) {
        cargs.push(
            "-seg-wlo",
            String((params["seg_wlo"] ?? null))
        );
    }
    if ((params["seg_ghi"] ?? null) !== null) {
        cargs.push(
            "-seg-ghi",
            String((params["seg_ghi"] ?? null))
        );
    }
    if ((params["nothicken"] ?? null)) {
        cargs.push("-nothicken");
    }
    if ((params["no_ca_align_after"] ?? null)) {
        cargs.push("-no-ca-align-after");
    }
    if ((params["no_ca_align"] ?? null)) {
        cargs.push("-no-ca-align");
    }
    if ((params["deface"] ?? null)) {
        cargs.push("-deface");
    }
    if ((params["mprage"] ?? null)) {
        cargs.push("-mprage");
    }
    if ((params["washu_mprage"] ?? null)) {
        cargs.push("-washu_mprage");
    }
    if ((params["schwartzya3t_atlas"] ?? null)) {
        cargs.push("-schwartzya3t-atlas");
    }
    if ((params["mail_username"] ?? null) !== null) {
        cargs.push(
            "-mail",
            (params["mail_username"] ?? null)
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "-threads",
            String((params["threads"] ?? null))
        );
    }
    return cargs;
}


function map_central_sulcus_outputs(
    params: MapCentralSulcusParameters,
    execution: Execution,
): MapCentralSulcusOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MapCentralSulcusOutputs = {
        root: execution.outputFile("."),
        log_file: execution.outputFile([(params["subjid"] ?? null), "/scripts/recon-all.log"].join('')),
        status_log_file: execution.outputFile([(params["subjid"] ?? null), "/scripts/recon-all-status.log"].join('')),
    };
    return ret;
}


function map_central_sulcus_execute(
    params: MapCentralSulcusParameters,
    execution: Execution,
): MapCentralSulcusOutputs {
    /**
     * Performs all, or any part of, the FreeSurfer cortical reconstruction process.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MapCentralSulcusOutputs`).
     */
    params = execution.params(params)
    const cargs = map_central_sulcus_cargs(params, execution)
    const ret = map_central_sulcus_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function map_central_sulcus(
    subjid: string,
    process_directive: string,
    hemi_flag: string | null = null,
    expert_prefs_file: InputPathType | null = null,
    xopts_use: boolean = false,
    xopts_clean: boolean = false,
    xopts_overwrite: boolean = false,
    watershed_cmd: string | null = null,
    xmask_file: InputPathType | null = null,
    wsless: boolean = false,
    wsmore: boolean = false,
    wsatlas: boolean = false,
    no_wsatlas: boolean = false,
    no_wsgcaatlas: boolean = false,
    wsthresh: number | null = null,
    wsseed: string | null = null,
    norm3diters: number | null = null,
    normmaxgrad: number | null = null,
    norm1_b: number | null = null,
    norm2_b: number | null = null,
    norm1_n: number | null = null,
    norm2_n: number | null = null,
    cm_flag: boolean = false,
    no_fix_with_ga: boolean = false,
    fix_diag_only: boolean = false,
    seg_wlo: number | null = null,
    seg_ghi: number | null = null,
    nothicken: boolean = false,
    no_ca_align_after: boolean = false,
    no_ca_align: boolean = false,
    deface: boolean = false,
    mprage: boolean = false,
    washu_mprage: boolean = false,
    schwartzya3t_atlas: boolean = false,
    mail_username: string | null = null,
    threads: number | null = null,
    runner: Runner | null = null,
): MapCentralSulcusOutputs {
    /**
     * Performs all, or any part of, the FreeSurfer cortical reconstruction process.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjid FreeSurfer subject identification string which doubles as the name of the reconstruction root directory for the subject.
     * @param process_directive Process directive for recon-all (e.g. -all, -autorecon-all, -autorecon1)
     * @param hemi_flag Specify hemisphere processing (e.g., lh for left hemisphere or rh for right hemisphere)
     * @param expert_prefs_file Read-in expert options file for processing. Overrides default options.
     * @param xopts_use Use pre-existing expert options file.
     * @param xopts_clean Delete pre-existing expert options file.
     * @param xopts_overwrite Overwrite pre-existing expert options file.
     * @param watershed_cmd Controls how the skull stripping will be performed.
     * @param xmask_file Custom external brain mask to replace automated skullstripping.
     * @param wsless Decrease watershed threshold (leaves less skull, but can strip more brain).
     * @param wsmore Increase watershed threshold (leaves more skull, but can strip less brain).
     * @param wsatlas Use atlas when skull stripping.
     * @param no_wsatlas Do not use atlas when skull stripping.
     * @param no_wsgcaatlas Do not use GCA atlas when skull stripping.
     * @param wsthresh Explicitly set watershed threshold.
     * @param wsseed Specify an index (C, R, S) point in the skull.
     * @param norm3diters Number of 3d iterations for mri_normalize.
     * @param normmaxgrad Max grad (-g) for mri_normalize. Default is 1.
     * @param norm1_b In the first usage of mri_normalize, use control point with intensity N below target (default=10.0).
     * @param norm2_b In the second usage of mri_normalize, use control point with intensity N below target (default=10.0).
     * @param norm1_n In the first usage of mri_normalize, do N number of iterations.
     * @param norm2_n In the second usage of mri_normalize, do N number of iterations.
     * @param cm_flag Conform volumes to the min voxel size.
     * @param no_fix_with_ga Do not use genetic algorithm when fixing topology.
     * @param fix_diag_only Topology fixer runs until ?h.defect_labels files are created, then stops.
     * @param seg_wlo Set wlo value for mri_segment and mris_make_surfaces.
     * @param seg_ghi Set ghi value for mri_segment and mris_make_surfaces.
     * @param nothicken Pass '-thicken 0' to mri_segment.
     * @param no_ca_align_after Turn off -align-after with mri_ca_register.
     * @param no_ca_align Turn off -align with mri_ca_label.
     * @param deface Deface subject, written to orig_defaced.mgz.
     * @param mprage Assume scan parameters are MGH MP-RAGE protocol.
     * @param washu_mprage Assume scan parameters are Wash.U. MP-RAGE protocol.
     * @param schwartzya3t_atlas For tal reg, use special young adult 3T atlas.
     * @param mail_username Mail user when done.
     * @param threads Set number of threads to use.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MapCentralSulcusOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAP_CENTRAL_SULCUS_METADATA);
    const params = map_central_sulcus_params(subjid, process_directive, hemi_flag, expert_prefs_file, xopts_use, xopts_clean, xopts_overwrite, watershed_cmd, xmask_file, wsless, wsmore, wsatlas, no_wsatlas, no_wsgcaatlas, wsthresh, wsseed, norm3diters, normmaxgrad, norm1_b, norm2_b, norm1_n, norm2_n, cm_flag, no_fix_with_ga, fix_diag_only, seg_wlo, seg_ghi, nothicken, no_ca_align_after, no_ca_align, deface, mprage, washu_mprage, schwartzya3t_atlas, mail_username, threads)
    return map_central_sulcus_execute(params, execution);
}


export {
      MAP_CENTRAL_SULCUS_METADATA,
      MapCentralSulcusOutputs,
      MapCentralSulcusParameters,
      map_central_sulcus,
      map_central_sulcus_params,
};
