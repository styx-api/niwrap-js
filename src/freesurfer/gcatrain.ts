// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GCATRAIN_METADATA: Metadata = {
    id: "f3164466ba4445f68d034989d08be3e16d734a52.boutiques",
    name: "gcatrain",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface GcatrainParameters {
    "__STYXTYPE__": "gcatrain";
    "gcadir": string;
    "subjectlistfile": InputPathType;
    "init_subject_transform": Array<string>;
    "seg_file": InputPathType;
    "source_subjects_dir": string;
    "num_iters"?: number | null | undefined;
    "num_threads"?: number | null | undefined;
    "exclude_file"?: InputPathType | null | undefined;
    "exclude_subject"?: string | null | undefined;
    "symmetric_atlas": boolean;
    "color_table"?: InputPathType | null | undefined;
    "no_submit": boolean;
    "mail_flag": boolean;
    "no_strict": boolean;
    "gcareg_iters": boolean;
    "prep_only": boolean;
    "nu10_flag": boolean;
    "nu12_flag": boolean;
    "no_emreg": boolean;
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
        "gcatrain": gcatrain_cargs,
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
 * Output object returned when calling `gcatrain(...)`.
 *
 * @interface
 */
interface GcatrainOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function gcatrain_params(
    gcadir: string,
    subjectlistfile: InputPathType,
    init_subject_transform: Array<string>,
    seg_file: InputPathType,
    source_subjects_dir: string,
    num_iters: number | null = null,
    num_threads: number | null = null,
    exclude_file: InputPathType | null = null,
    exclude_subject: string | null = null,
    symmetric_atlas: boolean = false,
    color_table: InputPathType | null = null,
    no_submit: boolean = false,
    mail_flag: boolean = false,
    no_strict: boolean = false,
    gcareg_iters: boolean = false,
    prep_only: boolean = false,
    nu10_flag: boolean = false,
    nu12_flag: boolean = false,
    no_emreg: boolean = false,
): GcatrainParameters {
    /**
     * Build parameters.
    
     * @param gcadir Directory for the new SUBJECTS_DIR.
     * @param subjectlistfile The list of subjects to include.
     * @param init_subject_transform Initialization subject and its talairach transform.
     * @param seg_file Segmentation file (e.g. seg_edited.mgz).
     * @param source_subjects_dir Source SUBJECTS_DIR for data.
     * @param num_iters Number of iterations.
     * @param num_threads Number of threads to use.
     * @param exclude_file File listing subjects to exclude, useful for jackknifing.
     * @param exclude_subject Exclude a single subject, useful for jackknifing.
     * @param symmetric_atlas Create a symmetric atlas.
     * @param color_table Colortable for segmentation labels (not needed).
     * @param no_submit Run serially without pbsubmit.
     * @param mail_flag Mail to user when jobs are pbsubmitted or finished.
     * @param no_strict Do not require FS build stamps to match across iterations.
     * @param gcareg_iters Set to 1 for testing.
     * @param prep_only Execute preparation steps only.
     * @param nu10_flag Run with nu10 settings.
     * @param nu12_flag Run with nu12 settings (default).
     * @param no_emreg Do not use mri_em_register.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "gcatrain" as const,
        "gcadir": gcadir,
        "subjectlistfile": subjectlistfile,
        "init_subject_transform": init_subject_transform,
        "seg_file": seg_file,
        "source_subjects_dir": source_subjects_dir,
        "symmetric_atlas": symmetric_atlas,
        "no_submit": no_submit,
        "mail_flag": mail_flag,
        "no_strict": no_strict,
        "gcareg_iters": gcareg_iters,
        "prep_only": prep_only,
        "nu10_flag": nu10_flag,
        "nu12_flag": nu12_flag,
        "no_emreg": no_emreg,
    };
    if (num_iters !== null) {
        params["num_iters"] = num_iters;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    if (exclude_file !== null) {
        params["exclude_file"] = exclude_file;
    }
    if (exclude_subject !== null) {
        params["exclude_subject"] = exclude_subject;
    }
    if (color_table !== null) {
        params["color_table"] = color_table;
    }
    return params;
}


function gcatrain_cargs(
    params: GcatrainParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("gcatrain");
    cargs.push(
        "--g",
        (params["gcadir"] ?? null)
    );
    cargs.push(
        "--f",
        execution.inputFile((params["subjectlistfile"] ?? null))
    );
    cargs.push(
        "--init",
        ...(params["init_subject_transform"] ?? null)
    );
    cargs.push(
        "--seg",
        execution.inputFile((params["seg_file"] ?? null))
    );
    cargs.push(
        "--sd",
        (params["source_subjects_dir"] ?? null)
    );
    if ((params["num_iters"] ?? null) !== null) {
        cargs.push(
            "--niters",
            String((params["num_iters"] ?? null))
        );
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(
            "--nthreads",
            String((params["num_threads"] ?? null))
        );
    }
    if ((params["exclude_file"] ?? null) !== null) {
        cargs.push(
            "--x",
            execution.inputFile((params["exclude_file"] ?? null))
        );
    }
    if ((params["exclude_subject"] ?? null) !== null) {
        cargs.push(
            "--xs",
            (params["exclude_subject"] ?? null)
        );
    }
    if ((params["symmetric_atlas"] ?? null)) {
        cargs.push("--sym");
    }
    if ((params["color_table"] ?? null) !== null) {
        cargs.push(
            "--ctab",
            execution.inputFile((params["color_table"] ?? null))
        );
    }
    if ((params["no_submit"] ?? null)) {
        cargs.push("--no-submit");
    }
    if ((params["mail_flag"] ?? null)) {
        cargs.push("--pb-m");
    }
    if ((params["no_strict"] ?? null)) {
        cargs.push("--no-strict");
    }
    if ((params["gcareg_iters"] ?? null)) {
        cargs.push("--gcareg-iters");
    }
    if ((params["prep_only"] ?? null)) {
        cargs.push("--prep-only");
    }
    if ((params["nu10_flag"] ?? null)) {
        cargs.push("--nu10");
    }
    if ((params["nu12_flag"] ?? null)) {
        cargs.push("--nu12");
    }
    if ((params["no_emreg"] ?? null)) {
        cargs.push("--no-emreg");
    }
    return cargs;
}


function gcatrain_outputs(
    params: GcatrainParameters,
    execution: Execution,
): GcatrainOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GcatrainOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function gcatrain_execute(
    params: GcatrainParameters,
    execution: Execution,
): GcatrainOutputs {
    /**
     * GCA training tool for building a GCA from a group of manually labeled subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GcatrainOutputs`).
     */
    params = execution.params(params)
    const cargs = gcatrain_cargs(params, execution)
    const ret = gcatrain_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function gcatrain(
    gcadir: string,
    subjectlistfile: InputPathType,
    init_subject_transform: Array<string>,
    seg_file: InputPathType,
    source_subjects_dir: string,
    num_iters: number | null = null,
    num_threads: number | null = null,
    exclude_file: InputPathType | null = null,
    exclude_subject: string | null = null,
    symmetric_atlas: boolean = false,
    color_table: InputPathType | null = null,
    no_submit: boolean = false,
    mail_flag: boolean = false,
    no_strict: boolean = false,
    gcareg_iters: boolean = false,
    prep_only: boolean = false,
    nu10_flag: boolean = false,
    nu12_flag: boolean = false,
    no_emreg: boolean = false,
    runner: Runner | null = null,
): GcatrainOutputs {
    /**
     * GCA training tool for building a GCA from a group of manually labeled subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param gcadir Directory for the new SUBJECTS_DIR.
     * @param subjectlistfile The list of subjects to include.
     * @param init_subject_transform Initialization subject and its talairach transform.
     * @param seg_file Segmentation file (e.g. seg_edited.mgz).
     * @param source_subjects_dir Source SUBJECTS_DIR for data.
     * @param num_iters Number of iterations.
     * @param num_threads Number of threads to use.
     * @param exclude_file File listing subjects to exclude, useful for jackknifing.
     * @param exclude_subject Exclude a single subject, useful for jackknifing.
     * @param symmetric_atlas Create a symmetric atlas.
     * @param color_table Colortable for segmentation labels (not needed).
     * @param no_submit Run serially without pbsubmit.
     * @param mail_flag Mail to user when jobs are pbsubmitted or finished.
     * @param no_strict Do not require FS build stamps to match across iterations.
     * @param gcareg_iters Set to 1 for testing.
     * @param prep_only Execute preparation steps only.
     * @param nu10_flag Run with nu10 settings.
     * @param nu12_flag Run with nu12 settings (default).
     * @param no_emreg Do not use mri_em_register.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GcatrainOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GCATRAIN_METADATA);
    const params = gcatrain_params(gcadir, subjectlistfile, init_subject_transform, seg_file, source_subjects_dir, num_iters, num_threads, exclude_file, exclude_subject, symmetric_atlas, color_table, no_submit, mail_flag, no_strict, gcareg_iters, prep_only, nu10_flag, nu12_flag, no_emreg)
    return gcatrain_execute(params, execution);
}


export {
      GCATRAIN_METADATA,
      GcatrainOutputs,
      GcatrainParameters,
      gcatrain,
      gcatrain_params,
};
