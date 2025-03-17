// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_FOLDING_ATLAS_METADATA: Metadata = {
    id: "2ea9d8d1b60df2ade6f961abd423e6b44d34ffda.boutiques",
    name: "make_folding_atlas",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MakeFoldingAtlasParameters {
    "__STYXTYPE__": "make_folding_atlas";
    "subjlistfile"?: InputPathType | null | undefined;
    "fsgdfile"?: InputPathType | null | undefined;
    "subjects"?: Array<string> | null | undefined;
    "output_base"?: string | null | undefined;
    "max_iterations"?: number | null | undefined;
    "xhemi": boolean;
    "init_surf_reg"?: string | null | undefined;
    "init_subject"?: string | null | undefined;
    "no_annot_template": boolean;
    "left_hemisphere": boolean;
    "right_hemisphere": boolean;
    "lhrh": boolean;
    "ico_order"?: number | null | undefined;
    "no_vol_on_last": boolean;
    "vol": boolean;
    "init": boolean;
    "short_sleep": boolean;
    "no_template_only": boolean;
    "threads"?: number | null | undefined;
    "slurm_account"?: string | null | undefined;
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
        "make_folding_atlas": make_folding_atlas_cargs,
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
        "make_folding_atlas": make_folding_atlas_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `make_folding_atlas(...)`.
 *
 * @interface
 */
interface MakeFoldingAtlasOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Average subject folder that contains the atlas files for each iteration.
     */
    average_subject_folder: OutputPathType | null;
}


function make_folding_atlas_params(
    subjlistfile: InputPathType | null = null,
    fsgdfile: InputPathType | null = null,
    subjects: Array<string> | null = null,
    output_base: string | null = null,
    max_iterations: number | null = null,
    xhemi: boolean = false,
    init_surf_reg: string | null = null,
    init_subject: string | null = null,
    no_annot_template: boolean = false,
    left_hemisphere: boolean = false,
    right_hemisphere: boolean = false,
    lhrh: boolean = false,
    ico_order: number | null = null,
    no_vol_on_last: boolean = false,
    vol: boolean = false,
    init: boolean = false,
    short_sleep: boolean = false,
    no_template_only: boolean = false,
    threads: number | null = null,
    slurm_account: string | null = null,
): MakeFoldingAtlasParameters {
    /**
     * Build parameters.
    
     * @param subjlistfile Subject list file.
     * @param fsgdfile FS Gradient Design file.
     * @param subjects Subjects to be included.
     * @param output_base Output base; the subject will be named based on this.
     * @param max_iterations Maximum number of iterations.
     * @param xhemi Do xhemi (sets hemilist to lh only, use --lhrh after if both are wanted).
     * @param init_surf_reg Registration used to make template on first iteration (default sphere.reg).
     * @param init_subject Create first atlas from subject instead of all subjects.
     * @param no_annot_template Disable annotation template (good for monkeys).
     * @param left_hemisphere Process left hemisphere.
     * @param right_hemisphere Process right hemisphere.
     * @param lhrh Process both left and right hemispheres (default).
     * @param ico_order Icosahedron order; default is 7.
     * @param no_vol_on_last Do not run make_average_volume on the last iteration.
     * @param vol Run make_average_volume on each iteration.
     * @param init Use previous iteration registration to initialize mris_register/surfreg.
     * @param short_sleep Sleep for a shorter time before polling.
     * @param no_template_only Make average surface files even with a single hemi or --no-vol.
     * @param threads Number of threads to use.
     * @param slurm_account SLURM account or set FS_BATCH_ACCOUNT environment variable.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_folding_atlas" as const,
        "xhemi": xhemi,
        "no_annot_template": no_annot_template,
        "left_hemisphere": left_hemisphere,
        "right_hemisphere": right_hemisphere,
        "lhrh": lhrh,
        "no_vol_on_last": no_vol_on_last,
        "vol": vol,
        "init": init,
        "short_sleep": short_sleep,
        "no_template_only": no_template_only,
    };
    if (subjlistfile !== null) {
        params["subjlistfile"] = subjlistfile;
    }
    if (fsgdfile !== null) {
        params["fsgdfile"] = fsgdfile;
    }
    if (subjects !== null) {
        params["subjects"] = subjects;
    }
    if (output_base !== null) {
        params["output_base"] = output_base;
    }
    if (max_iterations !== null) {
        params["max_iterations"] = max_iterations;
    }
    if (init_surf_reg !== null) {
        params["init_surf_reg"] = init_surf_reg;
    }
    if (init_subject !== null) {
        params["init_subject"] = init_subject;
    }
    if (ico_order !== null) {
        params["ico_order"] = ico_order;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (slurm_account !== null) {
        params["slurm_account"] = slurm_account;
    }
    return params;
}


function make_folding_atlas_cargs(
    params: MakeFoldingAtlasParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_folding_atlas");
    if ((params["subjlistfile"] ?? null) !== null) {
        cargs.push(
            "--f",
            execution.inputFile((params["subjlistfile"] ?? null))
        );
    }
    if ((params["fsgdfile"] ?? null) !== null) {
        cargs.push(
            "--fsgd",
            execution.inputFile((params["fsgdfile"] ?? null))
        );
    }
    if ((params["subjects"] ?? null) !== null) {
        cargs.push(
            "--s",
            ...(params["subjects"] ?? null)
        );
    }
    if ((params["output_base"] ?? null) !== null) {
        cargs.push(
            "--b",
            (params["output_base"] ?? null)
        );
    }
    if ((params["max_iterations"] ?? null) !== null) {
        cargs.push(
            "--nmax",
            String((params["max_iterations"] ?? null))
        );
    }
    if ((params["xhemi"] ?? null)) {
        cargs.push("--xhemi");
    }
    if ((params["init_surf_reg"] ?? null) !== null) {
        cargs.push(
            "--init-surf-reg",
            (params["init_surf_reg"] ?? null)
        );
    }
    if ((params["init_subject"] ?? null) !== null) {
        cargs.push(
            "--init-subject",
            (params["init_subject"] ?? null)
        );
    }
    if ((params["no_annot_template"] ?? null)) {
        cargs.push("--no-annot-template");
    }
    if ((params["left_hemisphere"] ?? null)) {
        cargs.push("--lh");
    }
    if ((params["right_hemisphere"] ?? null)) {
        cargs.push("--rh");
    }
    if ((params["lhrh"] ?? null)) {
        cargs.push("--lhrh");
    }
    if ((params["ico_order"] ?? null) !== null) {
        cargs.push(
            "--ico",
            String((params["ico_order"] ?? null))
        );
    }
    if ((params["no_vol_on_last"] ?? null)) {
        cargs.push("--no-vol-on-last");
    }
    if ((params["vol"] ?? null)) {
        cargs.push("--vol");
    }
    if ((params["init"] ?? null)) {
        cargs.push("--init");
    }
    if ((params["short_sleep"] ?? null)) {
        cargs.push("--short-sleep");
    }
    if ((params["no_template_only"] ?? null)) {
        cargs.push("--no-template-only");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["slurm_account"] ?? null) !== null) {
        cargs.push(
            "--account",
            (params["slurm_account"] ?? null)
        );
    }
    return cargs;
}


function make_folding_atlas_outputs(
    params: MakeFoldingAtlasParameters,
    execution: Execution,
): MakeFoldingAtlasOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeFoldingAtlasOutputs = {
        root: execution.outputFile("."),
        average_subject_folder: ((params["output_base"] ?? null) !== null) ? execution.outputFile([(params["output_base"] ?? null), ".i*"].join('')) : null,
    };
    return ret;
}


function make_folding_atlas_execute(
    params: MakeFoldingAtlasParameters,
    execution: Execution,
): MakeFoldingAtlasOutputs {
    /**
     * Script to iteratively create a cortical folding atlas.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeFoldingAtlasOutputs`).
     */
    params = execution.params(params)
    const cargs = make_folding_atlas_cargs(params, execution)
    const ret = make_folding_atlas_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_folding_atlas(
    subjlistfile: InputPathType | null = null,
    fsgdfile: InputPathType | null = null,
    subjects: Array<string> | null = null,
    output_base: string | null = null,
    max_iterations: number | null = null,
    xhemi: boolean = false,
    init_surf_reg: string | null = null,
    init_subject: string | null = null,
    no_annot_template: boolean = false,
    left_hemisphere: boolean = false,
    right_hemisphere: boolean = false,
    lhrh: boolean = false,
    ico_order: number | null = null,
    no_vol_on_last: boolean = false,
    vol: boolean = false,
    init: boolean = false,
    short_sleep: boolean = false,
    no_template_only: boolean = false,
    threads: number | null = null,
    slurm_account: string | null = null,
    runner: Runner | null = null,
): MakeFoldingAtlasOutputs {
    /**
     * Script to iteratively create a cortical folding atlas.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjlistfile Subject list file.
     * @param fsgdfile FS Gradient Design file.
     * @param subjects Subjects to be included.
     * @param output_base Output base; the subject will be named based on this.
     * @param max_iterations Maximum number of iterations.
     * @param xhemi Do xhemi (sets hemilist to lh only, use --lhrh after if both are wanted).
     * @param init_surf_reg Registration used to make template on first iteration (default sphere.reg).
     * @param init_subject Create first atlas from subject instead of all subjects.
     * @param no_annot_template Disable annotation template (good for monkeys).
     * @param left_hemisphere Process left hemisphere.
     * @param right_hemisphere Process right hemisphere.
     * @param lhrh Process both left and right hemispheres (default).
     * @param ico_order Icosahedron order; default is 7.
     * @param no_vol_on_last Do not run make_average_volume on the last iteration.
     * @param vol Run make_average_volume on each iteration.
     * @param init Use previous iteration registration to initialize mris_register/surfreg.
     * @param short_sleep Sleep for a shorter time before polling.
     * @param no_template_only Make average surface files even with a single hemi or --no-vol.
     * @param threads Number of threads to use.
     * @param slurm_account SLURM account or set FS_BATCH_ACCOUNT environment variable.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeFoldingAtlasOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_FOLDING_ATLAS_METADATA);
    const params = make_folding_atlas_params(subjlistfile, fsgdfile, subjects, output_base, max_iterations, xhemi, init_surf_reg, init_subject, no_annot_template, left_hemisphere, right_hemisphere, lhrh, ico_order, no_vol_on_last, vol, init, short_sleep, no_template_only, threads, slurm_account)
    return make_folding_atlas_execute(params, execution);
}


export {
      MAKE_FOLDING_ATLAS_METADATA,
      MakeFoldingAtlasOutputs,
      MakeFoldingAtlasParameters,
      make_folding_atlas,
      make_folding_atlas_params,
};
