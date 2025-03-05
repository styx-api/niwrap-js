// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TKREGISTER2_CMDL_METADATA: Metadata = {
    id: "a084019981b8c19c88bf65a10695c9febf690ada.boutiques",
    name: "tkregister2_cmdl",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Tkregister2CmdlParameters {
    "__STYXTYPE__": "tkregister2_cmdl";
    "movable_volume": InputPathType;
    "target_volume": InputPathType;
    "fstarg_flag": boolean;
    "reg_file"?: InputPathType | null | undefined;
    "check_reg_flag": boolean;
    "regheader_flag": boolean;
    "regheader_center_flag": boolean;
    "fsl_targ_flag": boolean;
    "fsl_targ_lr_flag": boolean;
    "gca_subject"?: string | null | undefined;
    "gca_skull_subject"?: string | null | undefined;
    "no_zero_cras_flag": boolean;
    "movbright"?: number | null | undefined;
    "no_inorm_flag": boolean;
    "fmov"?: number | null | undefined;
    "fmov_targ_flag": boolean;
    "plane"?: string | null | undefined;
    "slice"?: number | null | undefined;
    "volview"?: string | null | undefined;
    "fov"?: number | null | undefined;
    "movscale"?: number | null | undefined;
    "surf"?: string | null | undefined;
    "surf_rgb"?: Array<number> | null | undefined;
    "lh_only_flag": boolean;
    "rh_only_flag": boolean;
    "fstal_flag": boolean;
    "talxfmname"?: string | null | undefined;
    "ixfm"?: InputPathType | null | undefined;
    "xfm"?: InputPathType | null | undefined;
    "xfmout"?: InputPathType | null | undefined;
    "fsl"?: InputPathType | null | undefined;
    "fslregout"?: InputPathType | null | undefined;
    "freeview"?: InputPathType | null | undefined;
    "vox2vox"?: InputPathType | null | undefined;
    "lta"?: InputPathType | null | undefined;
    "lta_inv"?: InputPathType | null | undefined;
    "ltaout"?: InputPathType | null | undefined;
    "ltaout_inv_flag": boolean;
    "feat"?: string | null | undefined;
    "fsfeat"?: string | null | undefined;
    "identity_flag": boolean;
    "subject_id"?: string | null | undefined;
    "subjects_dir"?: string | null | undefined;
    "nofix_flag": boolean;
    "float2int"?: string | null | undefined;
    "title"?: string | null | undefined;
    "tag_flag": boolean;
    "mov_orientation"?: string | null | undefined;
    "targ_orientation"?: string | null | undefined;
    "int"?: Array<string> | null | undefined;
    "double_window_size_flag": boolean;
    "window_scale"?: number | null | undefined;
    "det"?: InputPathType | null | undefined;
    "aseg_flag": boolean;
    "aparc_flag": boolean;
    "wmparc_flag": boolean;
    "gdiagno"?: number | null | undefined;
    "trans"?: Array<number> | null | undefined;
    "rot"?: Array<number> | null | undefined;
    "conf_targ_flag": boolean;
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
        "tkregister2_cmdl": tkregister2_cmdl_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tkregister2_cmdl(...)`.
 *
 * @interface
 */
interface Tkregister2CmdlOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function tkregister2_cmdl_params(
    movable_volume: InputPathType,
    target_volume: InputPathType,
    fstarg_flag: boolean = false,
    reg_file: InputPathType | null = null,
    check_reg_flag: boolean = false,
    regheader_flag: boolean = false,
    regheader_center_flag: boolean = false,
    fsl_targ_flag: boolean = false,
    fsl_targ_lr_flag: boolean = false,
    gca_subject: string | null = null,
    gca_skull_subject: string | null = null,
    no_zero_cras_flag: boolean = false,
    movbright: number | null = null,
    no_inorm_flag: boolean = false,
    fmov: number | null = null,
    fmov_targ_flag: boolean = false,
    plane: string | null = null,
    slice: number | null = null,
    volview: string | null = null,
    fov: number | null = null,
    movscale: number | null = null,
    surf: string | null = null,
    surf_rgb: Array<number> | null = null,
    lh_only_flag: boolean = false,
    rh_only_flag: boolean = false,
    fstal_flag: boolean = false,
    talxfmname: string | null = null,
    ixfm: InputPathType | null = null,
    xfm: InputPathType | null = null,
    xfmout: InputPathType | null = null,
    fsl: InputPathType | null = null,
    fslregout: InputPathType | null = null,
    freeview: InputPathType | null = null,
    vox2vox: InputPathType | null = null,
    lta: InputPathType | null = null,
    lta_inv: InputPathType | null = null,
    ltaout: InputPathType | null = null,
    ltaout_inv_flag: boolean = false,
    feat: string | null = null,
    fsfeat: string | null = null,
    identity_flag: boolean = false,
    subject_id: string | null = null,
    subjects_dir: string | null = null,
    nofix_flag: boolean = false,
    float2int: string | null = null,
    title: string | null = null,
    tag_flag: boolean = false,
    mov_orientation: string | null = null,
    targ_orientation: string | null = null,
    int: Array<string> | null = null,
    double_window_size_flag: boolean = false,
    window_scale: number | null = null,
    det: InputPathType | null = null,
    aseg_flag: boolean = false,
    aparc_flag: boolean = false,
    wmparc_flag: boolean = false,
    gdiagno: number | null = null,
    trans: Array<number> | null = null,
    rot: Array<number> | null = null,
    conf_targ_flag: boolean = false,
): Tkregister2CmdlParameters {
    /**
     * Build parameters.
    
     * @param movable_volume Path to the movable volume.
     * @param target_volume Path to the target volume.
     * @param fstarg_flag Target is relative to subjectid/mri.
     * @param reg_file Path to input/output registration file.
     * @param check_reg_flag Only check, no --reg needed.
     * @param regheader_flag Compute registration from headers.
     * @param regheader_center_flag Same as --regheader but aligns volume centers.
     * @param fsl_targ_flag Use FSLDIR/data/standard/avg152T1.nii.gz.
     * @param fsl_targ_lr_flag Use FSLDIR/data/standard/avg152T1_LR-marked.nii.gz.
     * @param gca_subject Subject ID for linear GCA registration check.
     * @param gca_skull_subject Subject ID for linear 'with skull' GCA registration check.
     * @param no_zero_cras_flag Do not zero target cras (done with --fstal).
     * @param movbright Brightness of movable volume.
     * @param no_inorm_flag Turn off intensity normalization.
     * @param fmov Set movable volume brightness.
     * @param fmov_targ_flag Apply movable brightness to the target.
     * @param plane Startup view plane: cor, sag, ax.
     * @param slice Startup slice number.
     * @param volview Startup with targ or mov.
     * @param fov Window FOV in mm (default is 256).
     * @param movscale Scale size of movable volume by scale.
     * @param surf Display surface as an overlay.
     * @param surf_rgb Set surface color (0-255) for R G B.
     * @param lh_only_flag Only load/display left hemisphere.
     * @param rh_only_flag Only load/display right hemisphere.
     * @param fstal_flag Set movable to be tal and reg to be taliarach.xfm.
     * @param talxfmname Set movable to be tal and reg to be talxfmname.
     * @param ixfm MNI-style inverse registration input matrix.
     * @param xfm MNI-style registration input matrix.
     * @param xfmout MNI-style registration output matrix.
     * @param fsl FSL-style registration input matrix.
     * @param fslregout FSL-Style registration output matrix.
     * @param freeview FreeView registration output matrix.
     * @param vox2vox Vox2vox matrix in ascii.
     * @param lta Linear Transform Array file.
     * @param lta_inv Read in LTA and invert.
     * @param ltaout Output a Linear Transform Array.
     * @param ltaout_inv_flag Invert transform in ltaoutfile.
     * @param feat Check example_func2standard registration.
     * @param fsfeat Check reg/freesurfer/register.dat registration.
     * @param identity_flag Use identity as registration matrix.
     * @param subject_id Set subject id.
     * @param subjects_dir Use specified directory as SUBJECTS_DIR.
     * @param nofix_flag Don't fix old tkregister matrices.
     * @param float2int Specify old tkregister float2int.
     * @param title Set window title.
     * @param tag_flag Tag movable volume near the col/row origin.
     * @param mov_orientation Supply orientation string for movable volume.
     * @param targ_orientation Supply orientation string for target volume.
     * @param int Use registration from intermediate volume.
     * @param double_window_size_flag Double window size.
     * @param window_scale Scale window by specified scale.
     * @param det Save determinant of registration matrix to specified file.
     * @param aseg_flag Load aseg and hit 'd' to toggle.
     * @param aparc_flag Load aparc+aseg and hit 'c' to toggle.
     * @param wmparc_flag Load wmparc and hit 'c' to toggle.
     * @param gdiagno Set debug level.
     * @param trans Translation (mm) to apply to registration matrix.
     * @param rot Rotation angles (deg) to apply to registration matrix.
     * @param conf_targ_flag Conform target (assumes reg computed to conform target, eg, GCA).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tkregister2_cmdl" as const,
        "movable_volume": movable_volume,
        "target_volume": target_volume,
        "fstarg_flag": fstarg_flag,
        "check_reg_flag": check_reg_flag,
        "regheader_flag": regheader_flag,
        "regheader_center_flag": regheader_center_flag,
        "fsl_targ_flag": fsl_targ_flag,
        "fsl_targ_lr_flag": fsl_targ_lr_flag,
        "no_zero_cras_flag": no_zero_cras_flag,
        "no_inorm_flag": no_inorm_flag,
        "fmov_targ_flag": fmov_targ_flag,
        "lh_only_flag": lh_only_flag,
        "rh_only_flag": rh_only_flag,
        "fstal_flag": fstal_flag,
        "ltaout_inv_flag": ltaout_inv_flag,
        "identity_flag": identity_flag,
        "nofix_flag": nofix_flag,
        "tag_flag": tag_flag,
        "double_window_size_flag": double_window_size_flag,
        "aseg_flag": aseg_flag,
        "aparc_flag": aparc_flag,
        "wmparc_flag": wmparc_flag,
        "conf_targ_flag": conf_targ_flag,
    };
    if (reg_file !== null) {
        params["reg_file"] = reg_file;
    }
    if (gca_subject !== null) {
        params["gca_subject"] = gca_subject;
    }
    if (gca_skull_subject !== null) {
        params["gca_skull_subject"] = gca_skull_subject;
    }
    if (movbright !== null) {
        params["movbright"] = movbright;
    }
    if (fmov !== null) {
        params["fmov"] = fmov;
    }
    if (plane !== null) {
        params["plane"] = plane;
    }
    if (slice !== null) {
        params["slice"] = slice;
    }
    if (volview !== null) {
        params["volview"] = volview;
    }
    if (fov !== null) {
        params["fov"] = fov;
    }
    if (movscale !== null) {
        params["movscale"] = movscale;
    }
    if (surf !== null) {
        params["surf"] = surf;
    }
    if (surf_rgb !== null) {
        params["surf_rgb"] = surf_rgb;
    }
    if (talxfmname !== null) {
        params["talxfmname"] = talxfmname;
    }
    if (ixfm !== null) {
        params["ixfm"] = ixfm;
    }
    if (xfm !== null) {
        params["xfm"] = xfm;
    }
    if (xfmout !== null) {
        params["xfmout"] = xfmout;
    }
    if (fsl !== null) {
        params["fsl"] = fsl;
    }
    if (fslregout !== null) {
        params["fslregout"] = fslregout;
    }
    if (freeview !== null) {
        params["freeview"] = freeview;
    }
    if (vox2vox !== null) {
        params["vox2vox"] = vox2vox;
    }
    if (lta !== null) {
        params["lta"] = lta;
    }
    if (lta_inv !== null) {
        params["lta_inv"] = lta_inv;
    }
    if (ltaout !== null) {
        params["ltaout"] = ltaout;
    }
    if (feat !== null) {
        params["feat"] = feat;
    }
    if (fsfeat !== null) {
        params["fsfeat"] = fsfeat;
    }
    if (subject_id !== null) {
        params["subject_id"] = subject_id;
    }
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (float2int !== null) {
        params["float2int"] = float2int;
    }
    if (title !== null) {
        params["title"] = title;
    }
    if (mov_orientation !== null) {
        params["mov_orientation"] = mov_orientation;
    }
    if (targ_orientation !== null) {
        params["targ_orientation"] = targ_orientation;
    }
    if (int !== null) {
        params["int"] = int;
    }
    if (window_scale !== null) {
        params["window_scale"] = window_scale;
    }
    if (det !== null) {
        params["det"] = det;
    }
    if (gdiagno !== null) {
        params["gdiagno"] = gdiagno;
    }
    if (trans !== null) {
        params["trans"] = trans;
    }
    if (rot !== null) {
        params["rot"] = rot;
    }
    return params;
}


function tkregister2_cmdl_cargs(
    params: Tkregister2CmdlParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tkregister2_cmdl");
    cargs.push(
        "--mov",
        execution.inputFile((params["movable_volume"] ?? null))
    );
    cargs.push(
        "--targ",
        execution.inputFile((params["target_volume"] ?? null))
    );
    if ((params["fstarg_flag"] ?? null)) {
        cargs.push("--fstarg");
    }
    if ((params["reg_file"] ?? null) !== null) {
        cargs.push(
            "--reg",
            execution.inputFile((params["reg_file"] ?? null))
        );
    }
    if ((params["check_reg_flag"] ?? null)) {
        cargs.push("--check-reg");
    }
    if ((params["regheader_flag"] ?? null)) {
        cargs.push("--regheader");
    }
    if ((params["regheader_center_flag"] ?? null)) {
        cargs.push("--regheader-center");
    }
    if ((params["fsl_targ_flag"] ?? null)) {
        cargs.push("--fsl-targ");
    }
    if ((params["fsl_targ_lr_flag"] ?? null)) {
        cargs.push("--fsl-targ-lr");
    }
    if ((params["gca_subject"] ?? null) !== null) {
        cargs.push(
            "--gca",
            (params["gca_subject"] ?? null)
        );
    }
    if ((params["gca_skull_subject"] ?? null) !== null) {
        cargs.push(
            "--gca-skull",
            (params["gca_skull_subject"] ?? null)
        );
    }
    if ((params["no_zero_cras_flag"] ?? null)) {
        cargs.push("--no-zero-cras");
    }
    if ((params["movbright"] ?? null) !== null) {
        cargs.push(
            "--movbright",
            String((params["movbright"] ?? null))
        );
    }
    if ((params["no_inorm_flag"] ?? null)) {
        cargs.push("--no-inorm");
    }
    if ((params["fmov"] ?? null) !== null) {
        cargs.push(
            "--fmov",
            String((params["fmov"] ?? null))
        );
    }
    if ((params["fmov_targ_flag"] ?? null)) {
        cargs.push("--fmov-targ");
    }
    if ((params["plane"] ?? null) !== null) {
        cargs.push(
            "--plane",
            (params["plane"] ?? null)
        );
    }
    if ((params["slice"] ?? null) !== null) {
        cargs.push(
            "--slice",
            String((params["slice"] ?? null))
        );
    }
    if ((params["volview"] ?? null) !== null) {
        cargs.push(
            "--volview",
            (params["volview"] ?? null)
        );
    }
    if ((params["fov"] ?? null) !== null) {
        cargs.push(
            "--fov",
            String((params["fov"] ?? null))
        );
    }
    if ((params["movscale"] ?? null) !== null) {
        cargs.push(
            "--movscale",
            String((params["movscale"] ?? null))
        );
    }
    if ((params["surf"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf"] ?? null)
        );
    }
    if ((params["surf_rgb"] ?? null) !== null) {
        cargs.push(
            "--surf-rgb",
            ...(params["surf_rgb"] ?? null).map(String)
        );
    }
    if ((params["lh_only_flag"] ?? null)) {
        cargs.push("--lh-only");
    }
    if ((params["rh_only_flag"] ?? null)) {
        cargs.push("--rh-only");
    }
    if ((params["fstal_flag"] ?? null)) {
        cargs.push("--fstal");
    }
    if ((params["talxfmname"] ?? null) !== null) {
        cargs.push(
            "--talxfmname",
            (params["talxfmname"] ?? null)
        );
    }
    if ((params["ixfm"] ?? null) !== null) {
        cargs.push(
            "--ixfm",
            execution.inputFile((params["ixfm"] ?? null))
        );
    }
    if ((params["xfm"] ?? null) !== null) {
        cargs.push(
            "--xfm",
            execution.inputFile((params["xfm"] ?? null))
        );
    }
    if ((params["xfmout"] ?? null) !== null) {
        cargs.push(
            "--xfmout",
            execution.inputFile((params["xfmout"] ?? null))
        );
    }
    if ((params["fsl"] ?? null) !== null) {
        cargs.push(
            "--fsl",
            execution.inputFile((params["fsl"] ?? null))
        );
    }
    if ((params["fslregout"] ?? null) !== null) {
        cargs.push(
            "--fslregout",
            execution.inputFile((params["fslregout"] ?? null))
        );
    }
    if ((params["freeview"] ?? null) !== null) {
        cargs.push(
            "--freeview",
            execution.inputFile((params["freeview"] ?? null))
        );
    }
    if ((params["vox2vox"] ?? null) !== null) {
        cargs.push(
            "--vox2vox",
            execution.inputFile((params["vox2vox"] ?? null))
        );
    }
    if ((params["lta"] ?? null) !== null) {
        cargs.push(
            "--lta",
            execution.inputFile((params["lta"] ?? null))
        );
    }
    if ((params["lta_inv"] ?? null) !== null) {
        cargs.push(
            "--lta-inv",
            execution.inputFile((params["lta_inv"] ?? null))
        );
    }
    if ((params["ltaout"] ?? null) !== null) {
        cargs.push(
            "--ltaout",
            execution.inputFile((params["ltaout"] ?? null))
        );
    }
    if ((params["ltaout_inv_flag"] ?? null)) {
        cargs.push("--ltaout-inv");
    }
    if ((params["feat"] ?? null) !== null) {
        cargs.push(
            "--feat",
            (params["feat"] ?? null)
        );
    }
    if ((params["fsfeat"] ?? null) !== null) {
        cargs.push(
            "--fsfeat",
            (params["fsfeat"] ?? null)
        );
    }
    if ((params["identity_flag"] ?? null)) {
        cargs.push("--identity");
    }
    if ((params["subject_id"] ?? null) !== null) {
        cargs.push(
            "--s",
            (params["subject_id"] ?? null)
        );
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "--sd",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["nofix_flag"] ?? null)) {
        cargs.push("--nofix");
    }
    if ((params["float2int"] ?? null) !== null) {
        cargs.push(
            "--float2int",
            (params["float2int"] ?? null)
        );
    }
    if ((params["title"] ?? null) !== null) {
        cargs.push(
            "--title",
            (params["title"] ?? null)
        );
    }
    if ((params["tag_flag"] ?? null)) {
        cargs.push("--tag");
    }
    if ((params["mov_orientation"] ?? null) !== null) {
        cargs.push(
            "--mov-orientation",
            (params["mov_orientation"] ?? null)
        );
    }
    if ((params["targ_orientation"] ?? null) !== null) {
        cargs.push(
            "--targ-orientation",
            (params["targ_orientation"] ?? null)
        );
    }
    if ((params["int"] ?? null) !== null) {
        cargs.push(
            "--int",
            ...(params["int"] ?? null)
        );
    }
    if ((params["double_window_size_flag"] ?? null)) {
        cargs.push("--2");
    }
    if ((params["window_scale"] ?? null) !== null) {
        cargs.push(
            "--size",
            String((params["window_scale"] ?? null))
        );
    }
    if ((params["det"] ?? null) !== null) {
        cargs.push(
            "--det",
            execution.inputFile((params["det"] ?? null))
        );
    }
    if ((params["aseg_flag"] ?? null)) {
        cargs.push("--aseg");
    }
    if ((params["aparc_flag"] ?? null)) {
        cargs.push("--aparc+aseg");
    }
    if ((params["wmparc_flag"] ?? null)) {
        cargs.push("--wmparc");
    }
    if ((params["gdiagno"] ?? null) !== null) {
        cargs.push(
            "--gdiagno",
            String((params["gdiagno"] ?? null))
        );
    }
    if ((params["trans"] ?? null) !== null) {
        cargs.push(
            "--trans",
            ...(params["trans"] ?? null).map(String)
        );
    }
    if ((params["rot"] ?? null) !== null) {
        cargs.push(
            "--rot",
            ...(params["rot"] ?? null).map(String)
        );
    }
    if ((params["conf_targ_flag"] ?? null)) {
        cargs.push("--conf-targ");
    }
    return cargs;
}


function tkregister2_cmdl_outputs(
    params: Tkregister2CmdlParameters,
    execution: Execution,
): Tkregister2CmdlOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Tkregister2CmdlOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function tkregister2_cmdl_execute(
    params: Tkregister2CmdlParameters,
    execution: Execution,
): Tkregister2CmdlOutputs {
    /**
     * tkregister2 is a tool to assist in the manual tuning of the linear registration between two volumes, mainly for the purpose of interacting with the FreeSurfer anatomical stream.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Tkregister2CmdlOutputs`).
     */
    params = execution.params(params)
    const cargs = tkregister2_cmdl_cargs(params, execution)
    const ret = tkregister2_cmdl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tkregister2_cmdl(
    movable_volume: InputPathType,
    target_volume: InputPathType,
    fstarg_flag: boolean = false,
    reg_file: InputPathType | null = null,
    check_reg_flag: boolean = false,
    regheader_flag: boolean = false,
    regheader_center_flag: boolean = false,
    fsl_targ_flag: boolean = false,
    fsl_targ_lr_flag: boolean = false,
    gca_subject: string | null = null,
    gca_skull_subject: string | null = null,
    no_zero_cras_flag: boolean = false,
    movbright: number | null = null,
    no_inorm_flag: boolean = false,
    fmov: number | null = null,
    fmov_targ_flag: boolean = false,
    plane: string | null = null,
    slice: number | null = null,
    volview: string | null = null,
    fov: number | null = null,
    movscale: number | null = null,
    surf: string | null = null,
    surf_rgb: Array<number> | null = null,
    lh_only_flag: boolean = false,
    rh_only_flag: boolean = false,
    fstal_flag: boolean = false,
    talxfmname: string | null = null,
    ixfm: InputPathType | null = null,
    xfm: InputPathType | null = null,
    xfmout: InputPathType | null = null,
    fsl: InputPathType | null = null,
    fslregout: InputPathType | null = null,
    freeview: InputPathType | null = null,
    vox2vox: InputPathType | null = null,
    lta: InputPathType | null = null,
    lta_inv: InputPathType | null = null,
    ltaout: InputPathType | null = null,
    ltaout_inv_flag: boolean = false,
    feat: string | null = null,
    fsfeat: string | null = null,
    identity_flag: boolean = false,
    subject_id: string | null = null,
    subjects_dir: string | null = null,
    nofix_flag: boolean = false,
    float2int: string | null = null,
    title: string | null = null,
    tag_flag: boolean = false,
    mov_orientation: string | null = null,
    targ_orientation: string | null = null,
    int: Array<string> | null = null,
    double_window_size_flag: boolean = false,
    window_scale: number | null = null,
    det: InputPathType | null = null,
    aseg_flag: boolean = false,
    aparc_flag: boolean = false,
    wmparc_flag: boolean = false,
    gdiagno: number | null = null,
    trans: Array<number> | null = null,
    rot: Array<number> | null = null,
    conf_targ_flag: boolean = false,
    runner: Runner | null = null,
): Tkregister2CmdlOutputs {
    /**
     * tkregister2 is a tool to assist in the manual tuning of the linear registration between two volumes, mainly for the purpose of interacting with the FreeSurfer anatomical stream.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param movable_volume Path to the movable volume.
     * @param target_volume Path to the target volume.
     * @param fstarg_flag Target is relative to subjectid/mri.
     * @param reg_file Path to input/output registration file.
     * @param check_reg_flag Only check, no --reg needed.
     * @param regheader_flag Compute registration from headers.
     * @param regheader_center_flag Same as --regheader but aligns volume centers.
     * @param fsl_targ_flag Use FSLDIR/data/standard/avg152T1.nii.gz.
     * @param fsl_targ_lr_flag Use FSLDIR/data/standard/avg152T1_LR-marked.nii.gz.
     * @param gca_subject Subject ID for linear GCA registration check.
     * @param gca_skull_subject Subject ID for linear 'with skull' GCA registration check.
     * @param no_zero_cras_flag Do not zero target cras (done with --fstal).
     * @param movbright Brightness of movable volume.
     * @param no_inorm_flag Turn off intensity normalization.
     * @param fmov Set movable volume brightness.
     * @param fmov_targ_flag Apply movable brightness to the target.
     * @param plane Startup view plane: cor, sag, ax.
     * @param slice Startup slice number.
     * @param volview Startup with targ or mov.
     * @param fov Window FOV in mm (default is 256).
     * @param movscale Scale size of movable volume by scale.
     * @param surf Display surface as an overlay.
     * @param surf_rgb Set surface color (0-255) for R G B.
     * @param lh_only_flag Only load/display left hemisphere.
     * @param rh_only_flag Only load/display right hemisphere.
     * @param fstal_flag Set movable to be tal and reg to be taliarach.xfm.
     * @param talxfmname Set movable to be tal and reg to be talxfmname.
     * @param ixfm MNI-style inverse registration input matrix.
     * @param xfm MNI-style registration input matrix.
     * @param xfmout MNI-style registration output matrix.
     * @param fsl FSL-style registration input matrix.
     * @param fslregout FSL-Style registration output matrix.
     * @param freeview FreeView registration output matrix.
     * @param vox2vox Vox2vox matrix in ascii.
     * @param lta Linear Transform Array file.
     * @param lta_inv Read in LTA and invert.
     * @param ltaout Output a Linear Transform Array.
     * @param ltaout_inv_flag Invert transform in ltaoutfile.
     * @param feat Check example_func2standard registration.
     * @param fsfeat Check reg/freesurfer/register.dat registration.
     * @param identity_flag Use identity as registration matrix.
     * @param subject_id Set subject id.
     * @param subjects_dir Use specified directory as SUBJECTS_DIR.
     * @param nofix_flag Don't fix old tkregister matrices.
     * @param float2int Specify old tkregister float2int.
     * @param title Set window title.
     * @param tag_flag Tag movable volume near the col/row origin.
     * @param mov_orientation Supply orientation string for movable volume.
     * @param targ_orientation Supply orientation string for target volume.
     * @param int Use registration from intermediate volume.
     * @param double_window_size_flag Double window size.
     * @param window_scale Scale window by specified scale.
     * @param det Save determinant of registration matrix to specified file.
     * @param aseg_flag Load aseg and hit 'd' to toggle.
     * @param aparc_flag Load aparc+aseg and hit 'c' to toggle.
     * @param wmparc_flag Load wmparc and hit 'c' to toggle.
     * @param gdiagno Set debug level.
     * @param trans Translation (mm) to apply to registration matrix.
     * @param rot Rotation angles (deg) to apply to registration matrix.
     * @param conf_targ_flag Conform target (assumes reg computed to conform target, eg, GCA).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Tkregister2CmdlOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TKREGISTER2_CMDL_METADATA);
    const params = tkregister2_cmdl_params(movable_volume, target_volume, fstarg_flag, reg_file, check_reg_flag, regheader_flag, regheader_center_flag, fsl_targ_flag, fsl_targ_lr_flag, gca_subject, gca_skull_subject, no_zero_cras_flag, movbright, no_inorm_flag, fmov, fmov_targ_flag, plane, slice, volview, fov, movscale, surf, surf_rgb, lh_only_flag, rh_only_flag, fstal_flag, talxfmname, ixfm, xfm, xfmout, fsl, fslregout, freeview, vox2vox, lta, lta_inv, ltaout, ltaout_inv_flag, feat, fsfeat, identity_flag, subject_id, subjects_dir, nofix_flag, float2int, title, tag_flag, mov_orientation, targ_orientation, int, double_window_size_flag, window_scale, det, aseg_flag, aparc_flag, wmparc_flag, gdiagno, trans, rot, conf_targ_flag)
    return tkregister2_cmdl_execute(params, execution);
}


export {
      TKREGISTER2_CMDL_METADATA,
      Tkregister2CmdlOutputs,
      Tkregister2CmdlParameters,
      tkregister2_cmdl,
      tkregister2_cmdl_params,
};
