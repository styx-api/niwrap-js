// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_CA_TRAIN_METADATA: Metadata = {
    id: "3dbdf0aa633756ed33c361f4c0f3860b2e8de014.boutiques",
    name: "mri_ca_train",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriCaTrainParameters {
    "__STYXTYPE__": "mri_ca_train";
    "subjects": Array<string>;
    "output_gca": string;
    "segmentation": string;
    "transform"?: string | null | undefined;
    "mask_volume"?: string | null | undefined;
    "node_spacing"?: string | null | undefined;
    "prior_spacing"?: string | null | undefined;
    "input_training"?: Array<string> | null | undefined;
    "symmetrize": boolean;
    "makesym"?: Array<string> | null | undefined;
    "check_symmetry"?: Array<string> | null | undefined;
    "sanity_check": boolean;
    "threads"?: number | null | undefined;
    "done_file"?: string | null | undefined;
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
        "mri_ca_train": mri_ca_train_cargs,
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
 * Output object returned when calling `mri_ca_train(...)`.
 *
 * @interface
 */
interface MriCaTrainOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_ca_train_params(
    subjects: Array<string>,
    output_gca: string,
    segmentation: string,
    transform: string | null = null,
    mask_volume: string | null = null,
    node_spacing: string | null = null,
    prior_spacing: string | null = null,
    input_training: Array<string> | null = null,
    symmetrize: boolean = false,
    makesym: Array<string> | null = null,
    check_symmetry: Array<string> | null = null,
    sanity_check: boolean = false,
    threads: number | null = null,
    done_file: string | null = null,
): MriCaTrainParameters {
    /**
     * Build parameters.
    
     * @param subjects List of subject directories under the SUBJECTS_DIR. Each is a path relative to the subject's MRI directory.
     * @param output_gca Output GCA file name.
     * @param segmentation Segmentation volume directory relative to each subject's MRI path.
     * @param transform Atlas transform path relative to each subject's MRI transforms directory.
     * @param mask_volume Volume name used as a mask, path relative to each subject's MRI directory.
     * @param node_spacing Spacing of classifiers in canonical space
     * @param prior_spacing Spacing of class priors in canonical space
     * @param input_training Specifying training data, path relative to each subject's MRI directory. Can specify multiple inputs.
     * @param symmetrize Symmetrize the atlas after creation
     * @param makesym Symmetrize an already existing atlas. Specify input GCA and symmetrized GCA.
     * @param check_symmetry Check the symmetry of an already existing atlas. Specify input GCA and symmetrized GCA.
     * @param sanity_check Conduct sanity-check of labels for obvious edit errors
     * @param threads Specify number of threads to use (also known as -nthreads)
     * @param done_file Create DoneFile when done (contents: 0=ok, 1=error)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_ca_train" as const,
        "subjects": subjects,
        "output_gca": output_gca,
        "segmentation": segmentation,
        "symmetrize": symmetrize,
        "sanity_check": sanity_check,
    };
    if (transform !== null) {
        params["transform"] = transform;
    }
    if (mask_volume !== null) {
        params["mask_volume"] = mask_volume;
    }
    if (node_spacing !== null) {
        params["node_spacing"] = node_spacing;
    }
    if (prior_spacing !== null) {
        params["prior_spacing"] = prior_spacing;
    }
    if (input_training !== null) {
        params["input_training"] = input_training;
    }
    if (makesym !== null) {
        params["makesym"] = makesym;
    }
    if (check_symmetry !== null) {
        params["check_symmetry"] = check_symmetry;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (done_file !== null) {
        params["done_file"] = done_file;
    }
    return params;
}


function mri_ca_train_cargs(
    params: MriCaTrainParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_ca_train");
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["output_gca"] ?? null));
    cargs.push(
        "-seg",
        (params["segmentation"] ?? null)
    );
    if ((params["transform"] ?? null) !== null) {
        cargs.push(
            "-xform",
            (params["transform"] ?? null)
        );
    }
    if ((params["mask_volume"] ?? null) !== null) {
        cargs.push(
            "-mask",
            (params["mask_volume"] ?? null)
        );
    }
    if ((params["node_spacing"] ?? null) !== null) {
        cargs.push(
            "-node_spacing",
            (params["node_spacing"] ?? null)
        );
    }
    if ((params["prior_spacing"] ?? null) !== null) {
        cargs.push(
            "-prior_spacing",
            (params["prior_spacing"] ?? null)
        );
    }
    if ((params["input_training"] ?? null) !== null) {
        cargs.push(
            "-input",
            ...(params["input_training"] ?? null)
        );
    }
    if ((params["symmetrize"] ?? null)) {
        cargs.push("-sym");
    }
    if ((params["makesym"] ?? null) !== null) {
        cargs.push(
            "-makesym",
            ...(params["makesym"] ?? null)
        );
    }
    if ((params["check_symmetry"] ?? null) !== null) {
        cargs.push(
            "-checksym",
            ...(params["check_symmetry"] ?? null)
        );
    }
    if ((params["sanity_check"] ?? null)) {
        cargs.push("-check");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "-threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["done_file"] ?? null) !== null) {
        cargs.push(
            "-done",
            (params["done_file"] ?? null)
        );
    }
    return cargs;
}


function mri_ca_train_outputs(
    params: MriCaTrainParameters,
    execution: Execution,
): MriCaTrainOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriCaTrainOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_ca_train_execute(
    params: MriCaTrainParameters,
    execution: Execution,
): MriCaTrainOutputs {
    /**
     * Trains GCA data with multiple subjects using provided segmentation volumes and other configuration.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriCaTrainOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_ca_train_cargs(params, execution)
    const ret = mri_ca_train_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_ca_train(
    subjects: Array<string>,
    output_gca: string,
    segmentation: string,
    transform: string | null = null,
    mask_volume: string | null = null,
    node_spacing: string | null = null,
    prior_spacing: string | null = null,
    input_training: Array<string> | null = null,
    symmetrize: boolean = false,
    makesym: Array<string> | null = null,
    check_symmetry: Array<string> | null = null,
    sanity_check: boolean = false,
    threads: number | null = null,
    done_file: string | null = null,
    runner: Runner | null = null,
): MriCaTrainOutputs {
    /**
     * Trains GCA data with multiple subjects using provided segmentation volumes and other configuration.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjects List of subject directories under the SUBJECTS_DIR. Each is a path relative to the subject's MRI directory.
     * @param output_gca Output GCA file name.
     * @param segmentation Segmentation volume directory relative to each subject's MRI path.
     * @param transform Atlas transform path relative to each subject's MRI transforms directory.
     * @param mask_volume Volume name used as a mask, path relative to each subject's MRI directory.
     * @param node_spacing Spacing of classifiers in canonical space
     * @param prior_spacing Spacing of class priors in canonical space
     * @param input_training Specifying training data, path relative to each subject's MRI directory. Can specify multiple inputs.
     * @param symmetrize Symmetrize the atlas after creation
     * @param makesym Symmetrize an already existing atlas. Specify input GCA and symmetrized GCA.
     * @param check_symmetry Check the symmetry of an already existing atlas. Specify input GCA and symmetrized GCA.
     * @param sanity_check Conduct sanity-check of labels for obvious edit errors
     * @param threads Specify number of threads to use (also known as -nthreads)
     * @param done_file Create DoneFile when done (contents: 0=ok, 1=error)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriCaTrainOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_CA_TRAIN_METADATA);
    const params = mri_ca_train_params(subjects, output_gca, segmentation, transform, mask_volume, node_spacing, prior_spacing, input_training, symmetrize, makesym, check_symmetry, sanity_check, threads, done_file)
    return mri_ca_train_execute(params, execution);
}


export {
      MRI_CA_TRAIN_METADATA,
      MriCaTrainOutputs,
      MriCaTrainParameters,
      mri_ca_train,
      mri_ca_train_params,
};
