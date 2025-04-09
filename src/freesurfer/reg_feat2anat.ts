// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REG_FEAT2ANAT_METADATA: Metadata = {
    id: "90cae5222fb5bffe4289efcaf84a56fc3ceb6ff5.boutiques",
    name: "reg-feat2anat",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface RegFeat2anatParameters {
    "__STYXTYPE__": "reg-feat2anat";
    "feat_dir": string;
    "subject_id": string;
    "overwrite_exf2std": boolean;
    "manual": boolean;
    "manxfm_type"?: string | null | undefined;
    "dof"?: number | null | undefined;
    "bins"?: number | null | undefined;
    "cost"?: string | null | undefined;
    "max_angle"?: number | null | undefined;
    "bet": boolean;
    "title"?: string | null | undefined;
    "no_bbr": boolean;
    "spm": boolean;
    "no_inorm": boolean;
    "fmov"?: string | null | undefined;
    "debug": boolean;
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
        "reg-feat2anat": reg_feat2anat_cargs,
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
        "reg-feat2anat": reg_feat2anat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `reg_feat2anat(...)`.
 *
 * @interface
 */
interface RegFeat2anatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Init FS reg from anat to FSL-standard
     */
    anat2std_register: OutputPathType;
    /**
     * Init FSL reg from FSL-standard to anat
     */
    std2anat_fsl_mat: OutputPathType;
    /**
     * Init FSL reg from example_func to anat
     */
    exf2anat_init_fsl_mat: OutputPathType;
    /**
     * Final FSL reg from example_func to anat
     */
    exf2anat_fsl_mat: OutputPathType;
    /**
     * Final FS reg from example_func to anat
     */
    anat2exf_register: OutputPathType;
    /**
     * Same as anat2exf.register.dat
     */
    register_dat: OutputPathType;
    /**
     * Replacement for feat-generated
     */
    example_func2standard_mat: OutputPathType;
    /**
     * Log file for registration
     */
    log_file: OutputPathType;
}


function reg_feat2anat_params(
    feat_dir: string,
    subject_id: string,
    overwrite_exf2std: boolean = false,
    manual: boolean = false,
    manxfm_type: string | null = null,
    dof: number | null = null,
    bins: number | null = null,
    cost: string | null = null,
    max_angle: number | null = null,
    bet: boolean = false,
    title: string | null = null,
    no_bbr: boolean = false,
    spm: boolean = false,
    no_inorm: boolean = false,
    fmov: string | null = null,
    debug: boolean = false,
): RegFeat2anatParameters {
    /**
     * Build parameters.
    
     * @param feat_dir Directory in which to find example_func.
     * @param subject_id FreeSurfer subject identifier as found in SUBJECTS_DIR.
     * @param overwrite_exf2std Replace Feat-generated example_func2standard.
     * @param manual Interactively view/edit registration.
     * @param manxfm_type Interactively view/edit registration for xfm type. xfmtype can be: func2anat, std2anat, or func2std.
     * @param dof FLIRT degrees of freedom (default is 6).
     * @param bins FLIRT number of bins (default is 256).
     * @param cost FLIRT cost function (default is corratio).
     * @param max_angle FLIRT maximum search angle (default is 90).
     * @param bet Run betfunc on example_func (not with FSL 4.0).
     * @param title Title for tkregister window.
     * @param no_bbr Do not use boundary-based registration.
     * @param spm Use SPM instead of FLIRT, 6 dof only.
     * @param no_inorm Do not inorm when running tkregister2.
     * @param fmov fmov argument for tkregister2.
     * @param debug Turn on debugging.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "reg-feat2anat" as const,
        "feat_dir": feat_dir,
        "subject_id": subject_id,
        "overwrite_exf2std": overwrite_exf2std,
        "manual": manual,
        "bet": bet,
        "no_bbr": no_bbr,
        "spm": spm,
        "no_inorm": no_inorm,
        "debug": debug,
    };
    if (manxfm_type !== null) {
        params["manxfm_type"] = manxfm_type;
    }
    if (dof !== null) {
        params["dof"] = dof;
    }
    if (bins !== null) {
        params["bins"] = bins;
    }
    if (cost !== null) {
        params["cost"] = cost;
    }
    if (max_angle !== null) {
        params["max_angle"] = max_angle;
    }
    if (title !== null) {
        params["title"] = title;
    }
    if (fmov !== null) {
        params["fmov"] = fmov;
    }
    return params;
}


function reg_feat2anat_cargs(
    params: RegFeat2anatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("reg-feat2anat");
    cargs.push(
        "--feat",
        (params["feat_dir"] ?? null)
    );
    cargs.push(
        "--subject",
        (params["subject_id"] ?? null)
    );
    if ((params["overwrite_exf2std"] ?? null)) {
        cargs.push("--overwrite-exf2std");
    }
    if ((params["manual"] ?? null)) {
        cargs.push("--manual");
    }
    if ((params["manxfm_type"] ?? null) !== null) {
        cargs.push(
            "--manxfm",
            (params["manxfm_type"] ?? null)
        );
    }
    if ((params["dof"] ?? null) !== null) {
        cargs.push(
            "--dof",
            String((params["dof"] ?? null))
        );
    }
    if ((params["bins"] ?? null) !== null) {
        cargs.push(
            "--bins",
            String((params["bins"] ?? null))
        );
    }
    if ((params["cost"] ?? null) !== null) {
        cargs.push(
            "--cost",
            (params["cost"] ?? null)
        );
    }
    if ((params["max_angle"] ?? null) !== null) {
        cargs.push(
            "--maxangle",
            String((params["max_angle"] ?? null))
        );
    }
    if ((params["bet"] ?? null)) {
        cargs.push("--bet");
    }
    if ((params["title"] ?? null) !== null) {
        cargs.push(
            "--title",
            (params["title"] ?? null)
        );
    }
    if ((params["no_bbr"] ?? null)) {
        cargs.push("--no-bbr");
    }
    if ((params["spm"] ?? null)) {
        cargs.push("--spm");
    }
    if ((params["no_inorm"] ?? null)) {
        cargs.push("--no-inorm");
    }
    if ((params["fmov"] ?? null) !== null) {
        cargs.push(
            "--fmov",
            (params["fmov"] ?? null)
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function reg_feat2anat_outputs(
    params: RegFeat2anatParameters,
    execution: Execution,
): RegFeat2anatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RegFeat2anatOutputs = {
        root: execution.outputFile("."),
        anat2std_register: execution.outputFile(["featdir/reg/freesurfer/anat2std.register.dat"].join('')),
        std2anat_fsl_mat: execution.outputFile(["featdir/reg/freesurfer/std2anat.fsl.mat"].join('')),
        exf2anat_init_fsl_mat: execution.outputFile(["featdir/reg/freesurfer/exf2anat.init.fsl.mat"].join('')),
        exf2anat_fsl_mat: execution.outputFile(["featdir/reg/freesurfer/exf2anat.fsl.mat"].join('')),
        anat2exf_register: execution.outputFile(["featdir/reg/freesurfer/anat2exf.register.dat"].join('')),
        register_dat: execution.outputFile(["featdir/reg/freesurfer/register.dat"].join('')),
        example_func2standard_mat: execution.outputFile(["featdir/reg/freesurfer/example_func2standard.mat"].join('')),
        log_file: execution.outputFile(["reg/freesurfer/reg-feat2anat.log"].join('')),
    };
    return ret;
}


function reg_feat2anat_execute(
    params: RegFeat2anatParameters,
    execution: Execution,
): RegFeat2anatOutputs {
    /**
     * Registers FSL-Feat example_func to FreeSurfer anatomical data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RegFeat2anatOutputs`).
     */
    params = execution.params(params)
    const cargs = reg_feat2anat_cargs(params, execution)
    const ret = reg_feat2anat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function reg_feat2anat(
    feat_dir: string,
    subject_id: string,
    overwrite_exf2std: boolean = false,
    manual: boolean = false,
    manxfm_type: string | null = null,
    dof: number | null = null,
    bins: number | null = null,
    cost: string | null = null,
    max_angle: number | null = null,
    bet: boolean = false,
    title: string | null = null,
    no_bbr: boolean = false,
    spm: boolean = false,
    no_inorm: boolean = false,
    fmov: string | null = null,
    debug: boolean = false,
    runner: Runner | null = null,
): RegFeat2anatOutputs {
    /**
     * Registers FSL-Feat example_func to FreeSurfer anatomical data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param feat_dir Directory in which to find example_func.
     * @param subject_id FreeSurfer subject identifier as found in SUBJECTS_DIR.
     * @param overwrite_exf2std Replace Feat-generated example_func2standard.
     * @param manual Interactively view/edit registration.
     * @param manxfm_type Interactively view/edit registration for xfm type. xfmtype can be: func2anat, std2anat, or func2std.
     * @param dof FLIRT degrees of freedom (default is 6).
     * @param bins FLIRT number of bins (default is 256).
     * @param cost FLIRT cost function (default is corratio).
     * @param max_angle FLIRT maximum search angle (default is 90).
     * @param bet Run betfunc on example_func (not with FSL 4.0).
     * @param title Title for tkregister window.
     * @param no_bbr Do not use boundary-based registration.
     * @param spm Use SPM instead of FLIRT, 6 dof only.
     * @param no_inorm Do not inorm when running tkregister2.
     * @param fmov fmov argument for tkregister2.
     * @param debug Turn on debugging.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RegFeat2anatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REG_FEAT2ANAT_METADATA);
    const params = reg_feat2anat_params(feat_dir, subject_id, overwrite_exf2std, manual, manxfm_type, dof, bins, cost, max_angle, bet, title, no_bbr, spm, no_inorm, fmov, debug)
    return reg_feat2anat_execute(params, execution);
}


export {
      REG_FEAT2ANAT_METADATA,
      RegFeat2anatOutputs,
      RegFeat2anatParameters,
      reg_feat2anat,
      reg_feat2anat_params,
};
