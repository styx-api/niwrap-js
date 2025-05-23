// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_AVERAGE_SUBJECT_METADATA: Metadata = {
    id: "2f5649f2dbb16169830c9e1d7c14f590d2030ea1.boutiques",
    name: "make_average_subject",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MakeAverageSubjectParameters {
    "__STYXTYPE__": "make_average_subject";
    "subjects": Array<string>;
    "fsgd_file"?: InputPathType | null | undefined;
    "subject_list_file"?: InputPathType | null | undefined;
    "average_subject_name": string;
    "sd_out"?: string | null | undefined;
    "no_link": boolean;
    "sdir"?: string | null | undefined;
    "ico_order"?: number | null | undefined;
    "transform_file"?: InputPathType | null | undefined;
    "surface_registration"?: string | null | undefined;
    "no_surfaces": boolean;
    "no_volumes": boolean;
    "force": boolean;
    "keep_all_orig": boolean;
    "no_symlink": boolean;
    "no_ribbon": boolean;
    "no_surf2surf": boolean;
    "rca_threads"?: number | null | undefined;
    "help": boolean;
    "version": boolean;
    "echo": boolean;
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
        "make_average_subject": make_average_subject_cargs,
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
 * Output object returned when calling `make_average_subject(...)`.
 *
 * @interface
 */
interface MakeAverageSubjectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function make_average_subject_params(
    subjects: Array<string>,
    average_subject_name: string,
    fsgd_file: InputPathType | null = null,
    subject_list_file: InputPathType | null = null,
    sd_out: string | null = null,
    no_link: boolean = false,
    sdir: string | null = null,
    ico_order: number | null = 7,
    transform_file: InputPathType | null = null,
    surface_registration: string | null = "sphere.reg",
    no_surfaces: boolean = false,
    no_volumes: boolean = false,
    force: boolean = false,
    keep_all_orig: boolean = false,
    no_symlink: boolean = false,
    no_ribbon: boolean = false,
    no_surf2surf: boolean = false,
    rca_threads: number | null = null,
    help: boolean = false,
    version: boolean = false,
    echo: boolean = false,
    debug: boolean = false,
): MakeAverageSubjectParameters {
    /**
     * Build parameters.
    
     * @param subjects List of subject names
     * @param average_subject_name Name of the average subject
     * @param fsgd_file Get subject list from a FreeSurfer Group Descriptor file
     * @param subject_list_file Text file containing all subject names
     * @param sd_out Directory to put output under instead of SUBJECTS_DIR
     * @param no_link Do not link back to the original SUBJECTS_DIR with --sd-out
     * @param sdir Use an alternative SUBJECTS_DIR instead of the default one in the environment
     * @param ico_order Change order of icosahedron
     * @param transform_file Filename of transform file
     * @param surface_registration Alternative registration surface name
     * @param no_surfaces Do not make average surfaces
     * @param no_volumes Do not make average volumes
     * @param force Overwrite existing average subject data
     * @param keep_all_orig Concatenate all original volumes into mri/orig.all.mgz
     * @param no_symlink Do not use symbolic links with surfaces, copy files instead
     * @param no_ribbon Do not create ribbon.mgz and aparc+aseg.mgz files
     * @param no_surf2surf Use old parametric surface mapping method
     * @param rca_threads Number of threads to pass to recon-all
     * @param help Show short descriptive help
     * @param version Show script version info
     * @param echo Enable command echo for debugging
     * @param debug Enable debug mode, same as --echo
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_average_subject" as const,
        "subjects": subjects,
        "average_subject_name": average_subject_name,
        "no_link": no_link,
        "no_surfaces": no_surfaces,
        "no_volumes": no_volumes,
        "force": force,
        "keep_all_orig": keep_all_orig,
        "no_symlink": no_symlink,
        "no_ribbon": no_ribbon,
        "no_surf2surf": no_surf2surf,
        "help": help,
        "version": version,
        "echo": echo,
        "debug": debug,
    };
    if (fsgd_file !== null) {
        params["fsgd_file"] = fsgd_file;
    }
    if (subject_list_file !== null) {
        params["subject_list_file"] = subject_list_file;
    }
    if (sd_out !== null) {
        params["sd_out"] = sd_out;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (ico_order !== null) {
        params["ico_order"] = ico_order;
    }
    if (transform_file !== null) {
        params["transform_file"] = transform_file;
    }
    if (surface_registration !== null) {
        params["surface_registration"] = surface_registration;
    }
    if (rca_threads !== null) {
        params["rca_threads"] = rca_threads;
    }
    return params;
}


function make_average_subject_cargs(
    params: MakeAverageSubjectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_average_subject");
    cargs.push(
        "--subjects",
        ...(params["subjects"] ?? null)
    );
    if ((params["fsgd_file"] ?? null) !== null) {
        cargs.push(
            "--fsgd",
            execution.inputFile((params["fsgd_file"] ?? null))
        );
    }
    if ((params["subject_list_file"] ?? null) !== null) {
        cargs.push(
            "--f",
            execution.inputFile((params["subject_list_file"] ?? null))
        );
    }
    cargs.push(
        "--out",
        (params["average_subject_name"] ?? null)
    );
    if ((params["sd_out"] ?? null) !== null) {
        cargs.push(
            "--sd-out",
            (params["sd_out"] ?? null)
        );
    }
    if ((params["no_link"] ?? null)) {
        cargs.push("--no-link");
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "--sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["ico_order"] ?? null) !== null) {
        cargs.push(
            "--ico",
            String((params["ico_order"] ?? null))
        );
    }
    if ((params["transform_file"] ?? null) !== null) {
        cargs.push(
            "--xform",
            execution.inputFile((params["transform_file"] ?? null))
        );
    }
    if ((params["surface_registration"] ?? null) !== null) {
        cargs.push(
            "--surf-reg",
            (params["surface_registration"] ?? null)
        );
    }
    if ((params["no_surfaces"] ?? null)) {
        cargs.push("--no-surf");
    }
    if ((params["no_volumes"] ?? null)) {
        cargs.push("--no-vol");
    }
    if ((params["force"] ?? null)) {
        cargs.push("--force");
    }
    if ((params["keep_all_orig"] ?? null)) {
        cargs.push("--keep-all-orig");
    }
    if ((params["no_symlink"] ?? null)) {
        cargs.push("--no-symlink");
    }
    if ((params["no_ribbon"] ?? null)) {
        cargs.push("--no-ribbon");
    }
    if ((params["no_surf2surf"] ?? null)) {
        cargs.push("--no-surf2surf");
    }
    if ((params["rca_threads"] ?? null) !== null) {
        cargs.push(
            "--rca-threads",
            String((params["rca_threads"] ?? null))
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["echo"] ?? null)) {
        cargs.push("--echo");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function make_average_subject_outputs(
    params: MakeAverageSubjectParameters,
    execution: Execution,
): MakeAverageSubjectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeAverageSubjectOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function make_average_subject_execute(
    params: MakeAverageSubjectParameters,
    execution: Execution,
): MakeAverageSubjectOutputs {
    /**
     * Creates an average subject by averaging surfaces, curvatures, and volumes from a set of subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeAverageSubjectOutputs`).
     */
    params = execution.params(params)
    const cargs = make_average_subject_cargs(params, execution)
    const ret = make_average_subject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_average_subject(
    subjects: Array<string>,
    average_subject_name: string,
    fsgd_file: InputPathType | null = null,
    subject_list_file: InputPathType | null = null,
    sd_out: string | null = null,
    no_link: boolean = false,
    sdir: string | null = null,
    ico_order: number | null = 7,
    transform_file: InputPathType | null = null,
    surface_registration: string | null = "sphere.reg",
    no_surfaces: boolean = false,
    no_volumes: boolean = false,
    force: boolean = false,
    keep_all_orig: boolean = false,
    no_symlink: boolean = false,
    no_ribbon: boolean = false,
    no_surf2surf: boolean = false,
    rca_threads: number | null = null,
    help: boolean = false,
    version: boolean = false,
    echo: boolean = false,
    debug: boolean = false,
    runner: Runner | null = null,
): MakeAverageSubjectOutputs {
    /**
     * Creates an average subject by averaging surfaces, curvatures, and volumes from a set of subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjects List of subject names
     * @param average_subject_name Name of the average subject
     * @param fsgd_file Get subject list from a FreeSurfer Group Descriptor file
     * @param subject_list_file Text file containing all subject names
     * @param sd_out Directory to put output under instead of SUBJECTS_DIR
     * @param no_link Do not link back to the original SUBJECTS_DIR with --sd-out
     * @param sdir Use an alternative SUBJECTS_DIR instead of the default one in the environment
     * @param ico_order Change order of icosahedron
     * @param transform_file Filename of transform file
     * @param surface_registration Alternative registration surface name
     * @param no_surfaces Do not make average surfaces
     * @param no_volumes Do not make average volumes
     * @param force Overwrite existing average subject data
     * @param keep_all_orig Concatenate all original volumes into mri/orig.all.mgz
     * @param no_symlink Do not use symbolic links with surfaces, copy files instead
     * @param no_ribbon Do not create ribbon.mgz and aparc+aseg.mgz files
     * @param no_surf2surf Use old parametric surface mapping method
     * @param rca_threads Number of threads to pass to recon-all
     * @param help Show short descriptive help
     * @param version Show script version info
     * @param echo Enable command echo for debugging
     * @param debug Enable debug mode, same as --echo
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeAverageSubjectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_AVERAGE_SUBJECT_METADATA);
    const params = make_average_subject_params(subjects, average_subject_name, fsgd_file, subject_list_file, sd_out, no_link, sdir, ico_order, transform_file, surface_registration, no_surfaces, no_volumes, force, keep_all_orig, no_symlink, no_ribbon, no_surf2surf, rca_threads, help, version, echo, debug)
    return make_average_subject_execute(params, execution);
}


export {
      MAKE_AVERAGE_SUBJECT_METADATA,
      MakeAverageSubjectOutputs,
      MakeAverageSubjectParameters,
      make_average_subject,
      make_average_subject_params,
};
